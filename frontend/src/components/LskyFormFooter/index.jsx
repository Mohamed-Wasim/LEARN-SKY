import LskyButton from "../LskyButton";
import "./styles.scss";
const LskyFormFooter = ({ actions, t }) => {
    const formActions = ["save", "update", "cancel", "reset"];
    const formButtonActions = {
        save: { variant: "primary", type: "submit" },
        update: { variant: "primary", type: "submit" },
        reset: { variant: "secondary", type: "reset" },
        cancel: { variant: "secondary", type: "button" }
    };
    return (
        <div className="footer-btn_view">
            {formActions.map((action, index) =>
                actions[action] ? (
                    <LskyButton
                        key={index}
                        {...actions[action]}
                        variant={formButtonActions[action].variant}
                        type={formButtonActions[action].type}
                    >
                        {t(action.toUpperCase())}
                    </LskyButton>
                ) : null
            )}
        </div>
    );
};
export default LskyFormFooter;
