import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './styles.scss';
const LskyDropDown = (props) => {
  const { t } = useTranslation();
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant={props.variant}
        id="dropdown-basic"
        disabled={props.disabled || props.menus.length === 0}
      >
        {props.toggle}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.menus.map((menu, index) => (
          <Dropdown.Item {...menu} key={index}>
            {t(menu.text)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LskyDropDown;
