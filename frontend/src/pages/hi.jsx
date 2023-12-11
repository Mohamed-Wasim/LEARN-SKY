import { useTranslation } from "react-i18next";
import FormFooter from "../components/LskyFormFooter";
import LskyFormField from "../components/LskyFormField";

const DashBoardPage = () => {
    const { t } = useTranslation();
    const oFormActions = {
        save: { onClick: () => {} },
        cancel: { onClick: () => {} }
    };
    return (
        <div>
            <FormFooter actions={oFormActions} t={t} />
            <LskyFormField label="test" />
        </div>
    );
};

export default DashBoardPage;
