"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const ManageFacultyPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: role,
            link: `/${role}`,
          },
          {
            label: "faculty",
            link: `/${role}/faculty`,
          },
        ]}
      />
      ManageFacultyPage
    </div>
  );
};

export default ManageFacultyPage;
