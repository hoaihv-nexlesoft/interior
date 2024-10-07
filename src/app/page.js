import Layout from "../components/layout/Layout";
import SliderComponent from "../components/banner/Slider";
import ProjectSection from "../components/out-project/OutProject";
import PressSection from "../components/out-press/OutPress";

export default function Home() {
  return (
    <>
      <Layout>
        <SliderComponent />
        <ProjectSection />   
        <PressSection />   
      </Layout>
    </>
  );
}
