import { FocusCards } from "../Component/ui/Card";

export default function FocusCardsDemo() {
    const services = [
        {
          id: 1,
          title: "Web Development",
          description:
            "Transforming your ideas into outstanding websites that make a lasting impact. Our web development expertise is your pathway to online success.",
          img: "https://media.istockphoto.com/id/1503858430/vector/website-software-development-concept-web-design-site-and-mobile-app-on-laptop-testing-on.jpg?s=612x612&w=0&k=20&c=k8ckKsgOrPPxohAA_ywg2VXZzdCPptEbOlleRV8Kb7c=",
        },
        {
          id: 2,
          title: "Web & Mobile App Development",
          description:
            "Enhance your online impact with our mastery of Web and Mobile Apps, Web Design, and UI/UX Excellence. We turn your ideas into digital magic.",
          img: "https://img.freepik.com/free-photo/smartphone-with-user-interface-concept_52683-104212.jpg",
        },
        {
          id: 3,
          title: "Digital Marketing",
          description:
            "From getting more clicks to turning them into real customers, we are here as your trusted online growth partner. Build a powerful online presence to make your business grow faster",
          img: "https://img.freepik.com/free-vector/blue-background-with-white-marketing-doodles_23-2147582490.jpg?t=st=1741587423~exp=1741591023~hmac=c980cd6730bafb800bd44823257ec3bccaac78585929df0be6e4c2a307290335&w=740",
        },
        {
          id: 4,
          title: "UI/UX Designing",
          description:
            "Crafting digital experiences that are user-friendly, visually compelling, and brand-enhancing. Create visually impressive user interfaces now",
          img: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
        },
        {
          id: 5,
          title: "Graphic Design",
          description:
            "Where creativity meets technology, crafting compelling visual stories that captivate and inspire in our digital age. Let's create together and make your vision a reality",
          img: "https://img.freepik.com/free-vector/design-process-concept-landing-page_23-2148324107.jpg?t=st=1741587532~exp=1741591132~hmac=4181c3cf28a078c17c61f09d9f201bc0766fdb3ba06f72f5c69fdff947bc3b2f&w=740",
        },
        {
          id: 6,
          title: "2D/3D Animation",
          description:
            "Transforming imagination into vibrant realities through dynamic visuals, compelling narratives, and animated graphics",
          img: "https://img.freepik.com/premium-psd/3d-male-character-working-as-video-editor_541652-422.jpg?w=740",
        },
        {
          id: 7,
          title: "Cyber Security",
          description:
            "Safeguard your digital assets with our top-tier cybersecurity solutions. We protect your business from threats, ensuring a secure and resilient online presence.",
          img: "https://st4.depositphotos.com/3203307/26329/i/450/depositphotos_263293556-stock-photo-a-computer-system-hacked-warning.jpg",
        },
      ];
      
     
      
      
  return <FocusCards cards={services} />;
}
