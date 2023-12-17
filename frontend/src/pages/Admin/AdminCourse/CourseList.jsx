import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LskyTable from "../../../components/LskyTable";
import { getCourseList } from "../../../services/courseService";
import LskyPageHeader from "../../../components/LskyPageHeader";
import { LskyToaster } from "../../../components/LskyToaster";
import LskyInfo from "../../../components/LskyInfo";
import { useNavigate } from "react-router-dom";

const BatchList = () => {
  const { t } = useTranslation(); //translation
  const [aCourseTblData, setCourseTblData] = useState([]); //state for course lisat dable data
  const navigate = useNavigate();

  /* Defaine Row actions for Batch list table */
  const aCourseTableRowActions = [
    {
      text: t("EDIT"),
      onClick: (e) => navigate(`/admin/create-course?id=${e?._id}`)
    }
  ];

  /* Course list table defenition */
  const aCourseTablecolumns = React.useMemo(
    () => [
      {
        accessorKey: "code",
        header: () => <span>{t("COURSE_CODE").toUpperCase()}</span>
      },
      {
        accessorKey: "name",
        header: () => <span>{t("COURSE_NAME").toUpperCase()}</span>
      },
      {
        accessorKey: "desc",
        header: () => <span>{t("DESCRIPTION").toUpperCase()}</span>
      },
      {
        accessorKey: "crsType",
        header: () => <span>{t("COURSE_TYPE").toUpperCase()}</span>
      },
      {
        accessorKey: "crsCat",
        header: () => <span>{t("COURSE_CATAGORY").toUpperCase()}</span>
      }
    ],
    []
  );

  /* Function for fetch course list */
  const fetchCourseList = async () => {
    try {
      const aCourseList = await getCourseList();
      setCourseTblData(aCourseList);
    } catch (err) {
      LskyToaster(
        "error",
        t("UNKNOWN_ERROR_PLEASE_CONTACT_YOUR_ADMINISTRATOR"),
        3000
      );
    }
  };

  /* useEffect for call fetch batch list and fetch batch types functions */
  useEffect(() => {
    fetchCourseList();
  }, []);

  return (
    <>
      <LskyPageHeader heading="COURSE_LIST" />
      {aCourseTblData?.length > 0 ? (
        <LskyTable
          moreActions={aCourseTableRowActions}
          moreActionsPosition={2}
          isMore
          actions={{
            new: { onClick: () => navigate("/admin/create-course") }
          }}
          {...{
            data: aCourseTblData,
            columns: aCourseTablecolumns
          }}
        />
      ) : (
        <>
          <LskyInfo
            icon="info"
            message={t("NO_COURSE_FOUND")}
            highlight={t("INFORMATION")}
          />
        </>
      )}
    </>
  );
};

export default BatchList;
