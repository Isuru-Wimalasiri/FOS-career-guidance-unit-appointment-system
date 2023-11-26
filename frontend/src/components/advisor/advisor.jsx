import React, { useEffect, useState } from 'react';
import './advisor.css';
import { useSelector, useDispatch } from 'react-redux';
import { listAdvisors, advisorDetails } from '../../actions/advisorActions';
import { listDegreeProgram } from '../../actions/degreeProgramAction';
import { addDetails } from '../../actions/formDetailsActions';

const Advisor = ({ formData, setFormData }) => {
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedAdvisor, setSelectedAdvisor] = useState(undefined);

  const dispatch = useDispatch();
  const degreeProgramList = useSelector((state) => state.degreeProgramList);
  const advisorDetailsList = useSelector((state) => state.advisorDetails);
  const formDetailsList = useSelector((state) => state.formDetailsList);

  const { degreeProgram, error, loading } = degreeProgramList;
  const { advisor, errorAdv, loadingAdv } = advisorDetailsList;
  const { formDetails } = formDetailsList;

  const [degreeData, setDegreeData] = useState(undefined);

  useEffect(() => {
    if (degreeProgram?.length === 0) {
      dispatch(listDegreeProgram());
      dispatch(advisorDetails(4));

      setDegreeData(degreeProgram);
    } else {
      setDegreeData(degreeProgram);
      setSelectedDegree(formDetails.degreeDetails?.idad_degree);
      setSelectedAdvisor(formDetails.advisorDetails?.idcounselor);
    }
  }, [dispatch, degreeProgram?.length, advisor]);

  useEffect(() => {
    dispatch(
      addDetails({
        degreeDetails:
          degreeProgram?.find(
            (degree) => Number(degree?.idad_degree) === Number(selectedDegree)
          ) || degreeProgram?.[0],
        advisorDetails:
          advisor?.find(
            (adv) => Number(adv.idcounselor) === Number(selectedAdvisor)
          ) || advisor?.[0],
        timeDetails: null,
      })
    );
  }, [advisor, degreeProgram, selectedDegree, selectedAdvisor, dispatch]);

  return (
    <div>
      {loading || loadingAdv ? (
        <div>loading</div>
      ) : (
        <div>
          <div className="department">
            <div className="">
              <label className="departmentInput">
                <span className="degreeLabel">Degree Programme</span>
                <select
                  className="selector"
                  value={selectedDegree}
                  onChange={(e) => {
                    dispatch(advisorDetails(e.target.value));
                    setSelectedDegree(e.target.value);
                  }}
                >
                  {degreeData?.map((element, index) => (
                    <option
                      className="options"
                      key={index}
                      value={element.idad_degree}
                    >
                      {element.dp_name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="advisor">
            <label className="advisorInput">
              <span className="degreeLabel">Advisor</span>
              <select
                className="selector"
                value={selectedAdvisor}
                onChange={(e) => setSelectedAdvisor(e.target.value)}
              >
                {advisor?.map((element, index) => (
                  <option key={index} value={element.idcounselor}>
                    {element.c_name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="department">
            <div className="">
              <label className="departmentInput">
                <span className="degreeLabel">Degree Programme</span>
                <select
                  className="selector"
                  value={selectedDegree}
                  onChange={(e) => {
                    dispatch(advisorDetails(e.target.value));
                    setSelectedDegree(e.target.value);
                  }}
                >
                  {degreeData?.map(
                    (element, index) =>
                      (element.dp_name === 'Botany' ||
                        element.dp_name === 'Chemistry') && (
                        <option
                          className="options"
                          key={index}
                          value={element.idad_degree}
                        >
                          {element.dp_name}
                        </option>
                      )
                  )}
                </select>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advisor;
