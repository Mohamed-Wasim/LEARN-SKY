import React from 'react';
import { useTranslation } from 'react-i18next';
import { onlyNumber } from '@utils/appUtils.js';
import LskyFormField from '@components/LskyFormField';
import LskyFormHeader from '@components/LskyFormHeader';
import LskyInput from '@components/LskyInput';
import {
  Row,
  Col,
  Stack,
  FormGroup,
  FormLabel,
  Button,
  FormControl
} from 'react-bootstrap';
const LskyPortals = ({ data, instituteForm }) => {
  const { t } = useTranslation();

  const managePhno = (action, index, value) => {
    let phnos = instituteForm.values[data.phoneName];
    if (action === 'add') {
      phnos = [...phnos, ''];
    }
    if (action === 'delete') {
      phnos = instituteForm.values[data.phoneName].toSpliced(index, 1);
    }
    if (action === 'change') {
      phnos[index] = value;
    }
    instituteForm.setFieldValue(data.phoneName, phnos);
  };
  return (
    <div className="from-view_container">
      <Row className="m-0" key={data.showPortal}>
        <Col sm={4} className="p-0 pe-1">
          <LskyFormHeader text={data.title} t={t} />
          <div>
            <LskyFormField
              labelKey="PUBLISH_TO_PORTAL"
              fieldName={data.showPortal}
              field="check"
              type="switch"
              className="mb-3"
              size="lg"
              checked={instituteForm.values[data.showPortal]}
              handleChange={(e) => {
                instituteForm.setFieldValue(data.showPortal, e.target.checked);
              }}
              handleBlur={instituteForm.handleBlur}
            />
          </div>
        </Col>
        <Col sm={8} className="p-0 ps-1">
          <div className="list-form_container">
            <Row className="m-0 ">
              <Col sm={12} md={12} lg={12} className="p-0 mb-4">
                <LskyFormField
                  label="CONTACT_PERSON"
                  fieldName={data.contactName}
                  field="input"
                  handleChange={instituteForm.handleChange}
                  handleBlur={instituteForm.handleBlur}
                  errors={instituteForm.errors[data.contactName]}
                  value={instituteForm.values[data.contactName]}
                  touched={instituteForm.touched[data.contactName]}
                />
              </Col>
              <Col sm={12} md={12} lg={12} className="p-0 mb-4">
                <LskyFormField
                  label="EMAIL"
                  fieldName={data.mailName}
                  field="input"
                  handleChange={instituteForm.handleChange}
                  handleBlur={instituteForm.handleBlur}
                  errors={instituteForm.errors[data.mailName]}
                  value={instituteForm.values[data.mailName]}
                  touched={instituteForm.touched[data.mailName]}
                />
              </Col>
              <Col sm={12} md={12} lg={12} className="p-0 mb-4">
                <Stack gap={2}>
                  {instituteForm.values[data.phoneName].length > 0 &&
                    instituteForm.values[data.phoneName].map((phno, index) => (
                      <FormGroup key={index}>
                        {index === 0 && (
                          <FormLabel className="fs-3 text-secondary">
                            {t('CAND_TEL_NUMBER')}
                          </FormLabel>
                        )}
                        <Stack direction="horizontal" gap={2} className="mb-3">
                          <Stack>
                            <LskyInput
                              name={data.phoneName}
                              value={
                                instituteForm.values[data.phoneName][index]
                              }
                              onChange={(event) =>
                                onlyNumber(event, () =>
                                  managePhno(
                                    'change',
                                    index,
                                    event.target.value
                                  )
                                )
                              }
                              isInvalid={
                                instituteForm.touched?.[data.phoneName]?.[
                                  index
                                ] &&
                                instituteForm.errors[data.phoneName]?.[index]
                              }
                            ></LskyInput>
                            {instituteForm.touched?.[data.phoneName]?.[index] &&
                              instituteForm.errors?.[data.phoneName]?.[
                                index
                              ] && (
                                <FormControl.Feedback type="invalid">
                                  {t(
                                    instituteForm.errors?.[data.phoneName]?.[
                                      index
                                    ]
                                  )}
                                </FormControl.Feedback>
                              )}
                          </Stack>

                          {instituteForm.values[data.phoneName].length - 1 !==
                            0 && (
                            <Button
                              variant="secondary"
                              onClick={() => managePhno('delete', index)}
                            >
                              {t('DELETE')}
                            </Button>
                          )}
                          {instituteForm.values[data.phoneName].length - 1 ===
                            index && (
                            <Button
                              variant="primary"
                              onClick={() => managePhno('add')}
                            >
                              {t('ADD')}
                            </Button>
                          )}
                        </Stack>
                      </FormGroup>
                    ))}
                </Stack>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LskyPortals;
