import React, { useEffect, useRef, useState } from "react";
import { COMMONLABEL } from "../../utils/common";
import { useTranslation } from "react-i18next";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ExpandedState,
  getExpandedRowModel,
  flexRender
} from "@tanstack/react-table";
import "./styles.scss";
import { Stack } from "react-bootstrap";
import LskyTabs from "../LskyTabs";
const LskyMatIcon = React.lazy(() => import("../LskyMatIcon"));
const LskyButton = React.lazy(() => import("../LskyButton"));
const LskyDropDown = React.lazy(() => import("../LskyDropDown"));
const LskySearch = React.lazy(() => import("../LskySearch"));
const LskyFormField = React.lazy(() => import("../LskyFormField"));
const LskySideModal = React.lazy(() => import("../LskySideModal"));
const LskyInfo = React.lazy(() => import("../LskyInfo"));
const Label = React.lazy(() => import("../Label"));
const LskyTable = ({
  data,
  columns,
  onRowClick,
  isCheckBoxRqrd,
  manualPagination,
  pageCount,
  setPagination,
  isStartPage,
  noPagination,
  checkBoxPosition,
  onCheckBoxClick,
  moreActions,
  moreActionsPosition,
  actions,
  isMore,
  tabs,
  searchFunction,
  searchPlaceholder,
  noHeader,
  title
}) => {
  const { t } = useTranslation();
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  // const [lastClickedId, setLastClickedId] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const searchRef = useRef(null);
  const [expanded, setExpanded] = useState({});
  const obj = {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: data.every((d) => d.checked),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
          onClick: (e) => {
            e.preventDefault();
            onCheckBoxClick("header", e.target.checked);
          }
        }}
      />
    ),
    cell: ({ row }) => (
      <div>
        <IndeterminateCheckbox
          {...{
            checked: row.original?.checked,
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
            onClick: (e) => {
              e.preventDefault();
              onCheckBoxClick("row", e.target.checked, row.original);
            }
          }}
        />
      </div>
    )
  };

  const more = {
    id: "more",
    header: ({ table }) => <></>,
    cell: ({ row }) => (
      <div>
        <MoreFunctions menus={moreActions} row={row} />
      </div>
    )
  };

  columns = isCheckBoxRqrd
    ? !isNaN(checkBoxPosition)
      ? [...columns.toSpliced(checkBoxPosition, 0, obj)]
      : [obj, ...columns]
    : columns;
  columns = isMore
    ? !isNaN(moreActionsPosition)
      ? [...columns.toSpliced(moreActionsPosition, 0, more)]
      : [more, ...columns]
    : columns;
  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      sorting,
      globalFilter,
      expanded
    },
    onGlobalFilterChange: setGlobalFilter,
    manualPagination,
    pageCount,
    setPagination,
    isStartPage,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: (row) => row.child,
    debugTable: true,
    noPagination,
    onCheckBoxClick,
    enableRowSelection: true,
    onExpandedChange: setExpanded
  });

  useEffect(() => {
    if (manualPagination && isStartPage) {
      table.setPageIndex(0);
      table.setPageSize(10);
    }
  }, [isStartPage]);

  const paginate = (e) => {
    e.preventDefault();
    if (
      e.target.value &&
      !isNaN(e.target.value) &&
      Number(e.target.value) <= table.getPageCount()
    ) {
      if (manualPagination) {
        setPagination(
          Number(e.target.value),
          table.getState().pagination.pageSize
        );
      }
      table.setPageIndex(Number(e.target.value) - 1);
    }
  };

  function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (typeof indeterminate === "boolean") {
        ref.current.indeterminate = !rest.checked && indeterminate;
      }
    }, [ref, indeterminate]);
    return (
      <input
        type="checkbox"
        ref={ref}
        className={`${className} cursor-pointer`}
        {...rest}
      />
    );
  }

  const MoreFunctions = ({ menus, row }) => {
    const modifiedMenus = menus.map((menu, index) => ({
      ...menu,
      text: menu.dynamictext
        ? menu.tochangetext(
            menu.dynamictext === "."
              ? { data: row.original, index }
              : row.original[menu.dynamictext]
          )
        : menu.text,
      hide: menu.setHide && menu.setHide(row.original),
      onClick: menu?.onClick ? () => menu.onClick(row.original) : undefined,
      onChange: menu?.onChange ? () => menu.onChange(row.original) : undefined
    }));
    return (
      <LskyDropDown
        toggle={<LskyMatIcon name="more_horiz" className="text-primary" />}
        menus={modifiedMenus}
        variant="transparent toggle-transparent"
      />
    );
  };
  return (
    <>
      <div className="table-container">
        {!noHeader && (
          <div className="table-header_container">
            <Stack direction="horizontal" gap="3">
              {tabs && (
                <LskyTabs>
                  <LskyButton
                    variant="secondary"
                    eventKey="home"
                    title="home"
                    tabProps={{ disabled: true }}
                    disabled={!data || data.length === 0}
                  >
                    Left
                  </LskyButton>
                  <LskyButton
                    variant="secondary"
                    eventKey="tabs"
                    title="tabs"
                    tabProps={{}}
                  >
                    Middle
                  </LskyButton>
                  <LskyButton
                    variant="secondary"
                    eventKey="nab"
                    title="nab"
                    tabProps={{ disabled: true }}
                  >
                    Right
                  </LskyButton>
                </LskyTabs>
              )}
              {title && <Label>{title}</Label>}
              <LskySearch
                className="ms-auto"
                placeholder={searchPlaceholder ?? t("SEARCH")}
                sref={searchRef}
                onChange={(event) =>
                  searchFunction
                    ? searchFunction(event.target.value)
                    : setGlobalFilter(event.target.value)
                }
                disabled={
                  !data ||
                  (data.length === 0 && searchRef?.current?.value === 0)
                }
              />
              {/* for later use */}
              {false && (
                <LskyButton
                  icon="sort"
                  variant="secondary"
                  disabled={!data || data.length === 0}
                />
              )}
              {false && (
                <LskyButton
                  icon="config"
                  variant="secondary"
                  onClick={() => setShowSettings(true)}
                  disabled={!data || data.length === 0}
                />
              )}
              {actions &&
                Object.keys(actions).filter((k) => k !== "new").length > 0 && (
                  <LskyDropDown
                    toggle="Action"
                    menus={Object.keys(actions)
                      .filter((k) => k !== "new")
                      .map((m) => {
                        return actions[m];
                      })}
                    variant="secondary toggle-default"
                    disabled={!data || data.length === 0}
                  />
                )}
              {actions && actions.new ? (
                <LskyButton {...actions.new}>{t("ADD")}</LskyButton>
              ) : null}
            </Stack>
          </div>
        )}
        {data.length > 0 && table.getRowModel().rows.length > 0 ? (
          <>
            <div className="table-grid_container">
              <table className="table table-data_list">
                <thead className="table-header_label">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <th
                            key={header.id}
                            colSpan={header.colSpan}
                            // style={{ width: header.getSize() }}
                            className="fs-3 text-primary fw-bold p-4"
                          >
                            {header.isPlaceholder ? null : (
                              <div
                                {...{
                                  onClick:
                                    header.column.getToggleSortingHandler()
                                }}
                              >
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                {{
                                  asc: <LskyMatIcon name="expand_less" />,
                                  desc: <LskyMatIcon name="expand_more" />
                                }[header.column.getIsSorted()] ?? null}
                              </div>
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => {
                    return (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell, index) => {
                          return (
                            <td
                              key={cell.id}
                              className="fs-3 text-primary p-4"
                              style={{ width: cell.column.getSize() }}
                            >
                              {row.getCanExpand() &&
                                index === 0 &&
                                (row.getIsExpanded() ? (
                                  <LskyMatIcon
                                    name="expand_less"
                                    onClick={row.getToggleExpandedHandler()}
                                    className={"cursor-pointer"}
                                  />
                                ) : (
                                  <LskyMatIcon
                                    name="expand_more"
                                    onClick={row.getToggleExpandedHandler()}
                                    className={"cursor-pointer"}
                                  />
                                ))}
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="table-footer">
              <div />
              {!noPagination && (
                <div className="table-pagination_view">
                  <div>
                    <p className="m-0 fs-3 text-secondary">
                      Showing
                      {table.getState().pagination.pageIndex + 1} of{" "}
                      {table.getPageCount()}
                    </p>
                  </div>

                  <div className="table-pagination_btn">
                    <LskyButton
                      variant="secondary"
                      onClick={() => {
                        if (manualPagination) {
                          setPagination(
                            1,
                            table.getState().pagination.pageSize
                          );
                        }
                        table.setPageIndex(0);
                      }}
                      disabled={!table.getCanPreviousPage()}
                    >
                      <LskyMatIcon name="first_page" />
                    </LskyButton>
                    <LskyButton
                      variant="secondary"
                      onClick={() => {
                        if (manualPagination) {
                          setPagination(
                            table.getState().pagination.pageIndex,
                            table.getState().pagination.pageSize
                          );
                        }
                        table.previousPage();
                      }}
                      disabled={!table.getCanPreviousPage()}
                    >
                      Prev
                    </LskyButton>
                    <LskyButton
                      variant="primary"
                      onClick={() => {
                        if (manualPagination) {
                          setPagination(
                            table.getState().pagination.pageIndex + 2,
                            table.getState().pagination.pageSize
                          );
                        }
                        table.nextPage();
                      }}
                      disabled={!table.getCanNextPage()}
                    >
                      Next
                    </LskyButton>
                    <LskyButton
                      variant="secondary"
                      onClick={() => {
                        if (manualPagination) {
                          setPagination(
                            table.getPageCount(),
                            table.getState().pagination.pageSize
                          );
                        }
                        table.setPageIndex(table.getPageCount() - 1);
                      }}
                      disabled={!table.getCanNextPage()}
                    >
                      <LskyMatIcon name="last_page" />
                    </LskyButton>
                    <span className="fs-3 text-primary ps-1">Page :</span>
                    <LskyFormField
                      type="number"
                      max={table.getPageCount()}
                      min={1}
                      // defaultValue={table.getState().pagination.pageIndex + 1}
                      value={table.getState().pagination.pageIndex + 1}
                      onChange={(e) => paginate(e)}
                      className="border p-1 rounded w-16"
                    />
                    <span className="fs-3 text-primary ps-1">of</span>
                    <span className="fs-3 text-info">
                      {table.getPageCount()}
                    </span>

                    <select
                      value={table.getState().pagination.pageSize}
                      onChange={(e) => {
                        if (manualPagination) {
                          setPagination(1, Number(e.target.value));
                          table.setPageIndex(0);
                        }
                        table.setPageSize(Number(e.target.value));
                      }}
                    >
                      {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <LskyInfo
            icon="info"
            message={t("NO_DATA_FOUND")}
            highlight="Information"
          />
        )}
      </div>
      <LskySideModal
        show={showSettings}
        handleClose={setShowSettings}
        t={t}
        title={"SETTINGS"}
      >
        <div>
          <p>Visible columns</p>
          {table.getAllLeafColumns().map((column) => {
            return (
              <div key={column.id} className="px-1">
                <LskyFormField
                  field="check"
                  labelKey={t(COMMONLABEL[column.id] ?? column.id)}
                  checked={column.getIsVisible()}
                  onChange={column.getToggleVisibilityHandler()}
                />
              </div>
            );
          })}
        </div>
      </LskySideModal>
    </>
  );
};
export default LskyTable;
