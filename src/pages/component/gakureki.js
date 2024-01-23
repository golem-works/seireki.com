
import React from 'react';

const calculateYears = (birthYear) => {
  const middleSchoolGraduationYear = birthYear + 15;
  const highSchoolGraduationYear = middleSchoolGraduationYear + 3;
  const universityGraduationYear = highSchoolGraduationYear + 4;

  return {
    middleSchoolGraduationYear,
    highSchoolGraduationYear,
    universityGraduationYear
  };
};

const EducationYears = ({ birthYear }) => {
  const years = calculateYears(birthYear);

  return (
    <table>
      <thead>
        <tr>
          <th>イベント</th>
          <th>年</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>中学卒業年</td>
          <td>{years.middleSchoolGraduationYear}</td>
        </tr>
        <tr>
          <td>高校卒業年</td>
          <td>{years.highSchoolGraduationYear}</td>
        </tr>
        <tr>
          <td>大学卒業年</td>
          <td>{years.universityGraduationYear}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default EducationYears;
