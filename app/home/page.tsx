import { Layout } from "antd";
import { DashboardLayout } from "../../components/DashboardLayout";

export default function Home() {
  return (
    <Layout className="h-full" color="#455560">
      <DashboardLayout>
        <h2 className="text-3xl font-semibold text-[#1a3353] my-5">Home</h2>
        <p className="font-medium text-[#1a3353] opacity-90 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum neque vitae nisi placerat scelerisque. Nullam interdum
          purus a velit ullamcorper, ut ultricies enim pulvinar. Vivamus nec dui
          sit amet lorem sodales sagittis. Nulla at lorem ut nisi blandit
          fermentum. Sed commodo est quis ante volutpat, vitae hendrerit eros
          bibendum. Proin congue libero vitae magna tincidunt, sed tempor tortor
          vestibulum. Nam nec odio luctus, blandit nisi id, scelerisque lectus.
          Vestibulum eu nisi nec felis accumsan tincidunt sit amet nec nisl.
          Phasellus scelerisque lacus sed orci posuere, non dictum nisl
          condimentum. Nullam ac vestibulum nulla, in fermentum sapien. Cras
          volutpat malesuada turpis sit amet convallis. Integer at sem a nunc
          bibendum euismod.
        </p>
      </DashboardLayout>
    </Layout>
  );
}
