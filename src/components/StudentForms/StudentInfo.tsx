import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import UploadImage from "../ui/UploadImage";
import {
  acDepartmentOptions,
  acSemesterOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";

const StudentInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.firstName"
            size="large"
            label="First name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.middleName"
            size="large"
            label="Middle name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.lastName"
            size="large"
            label="Last name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>

        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormSelectField
            name="student.academicDepartment"
            size="large"
            label="Academic Department"
            placeholder="Select a department"
            options={acDepartmentOptions}
          />
        </Col>

        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormSelectField
            name="student.academicFaculty"
            size="large"
            label="Academic Faculty"
            placeholder="Select a faculty"
            options={facultyOptions}
          />
        </Col>

        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormSelectField
            name="student.academicSemester"
            size="large"
            label="Academic Semester"
            placeholder="Select a semester"
            options={acSemesterOptions}
          />
        </Col>

        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormSelectField
            name="student.gender"
            size="large"
            label="Gender"
            placeholder="Select a gender"
            options={genderOptions}
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
