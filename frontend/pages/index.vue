<template>
  <div>
    <HeroimgFull02 />
    <About01 />
    <Mission />
    <About02 />
    <IsSimpleToBegin />
    <About03 />
    <OccupationArea />
    <About04 />
    <Faq />
    <Testimonial />
    <ScrollToTop class="d-mobile" />
  </div>
</template>

<script>
import HeroimgFull02 from "@/components/HomeComponents/HeroimgFull02";
import About01 from "@/components/HomeComponents/About01";
import About02 from "@/components/HomeComponents/About02";
import About03 from "@/components/HomeComponents/About03";
import About04 from "@/components/HomeComponents/About04";

import OccupationArea from "@/components/MyComponents/OccupationArea";
import ScrollToTop from "@/components/Buttons/ScrollToTop";
import Mission from "@/components/MyComponents/Mission";
import BlogSection from "@/components/MyComponents/BlogSection";
import Testimonial from "@/components/MyComponents/Testimonial";
import IsSimpleToBegin from "@/components/MyComponents/IsSimpleToBegin";
import Faq from "@/components/MyComponents/Faq";

export default {
  head() {
    return {
      title: "K-Template",
      link: [
        {
          rel: "canonical",
          href: "" + this.$route.path
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A intergrace e uma empresa  de internet brasileira, com sede em Santos, São Paulo. plataforma de gerencia online, a conectar profissionais da area de engenharia e arquitetura, a prestar serviços por todo brasil, a ferramenta oferece diversos tipos de serviços. "
        }
      ]
    };
  },
  components: {
    HeroimgFull02,
    About01,
    About02,
    About03,
    About04,
    OccupationArea,
    ScrollToTop,
    BlogSection,
    IsSimpleToBegin,
    Mission,
    Testimonial,
    Faq
  }
};
</script>

<style scoped>
</style>
