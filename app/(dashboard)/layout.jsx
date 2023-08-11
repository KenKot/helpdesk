import Navbar from "../components/Navbar";

export const metadata = {
  title: "(dashboard) layout",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
