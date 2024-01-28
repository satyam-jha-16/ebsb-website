import React from "react";
import Card from "../Cards/Card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

function Activities() {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <motion.div variants={cardVariants}>
        <Card
          imagelink={"https://c.ndtvimg.com/2021-01/fg4o5d6g_republic-day-2021-republic-day-wishes_625x300_25_January_21.jpg"}
          text={"We, the EBSB Club at GGSIPU EDC, are excited to announce our participation in the Republic Day parade on 26th January. We believe it's a fantastic opportunity for our club members to come together and celebrate the spirit of our nation."}
          size={"w-full md:w-96"}
          outt={"/home"}
          act={""}
        />
      </motion.div>
      {/* Repeat the above pattern for other cards */}
    </motion.div>
  );
}

export default Activities;








// import React from "react";
// import Card from "../Cards/Card";

// function Activities() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       <Card
//         imagelink={"https://c.ndtvimg.com/2021-01/fg4o5d6g_republic-day-2021-republic-day-wishes_625x300_25_January_21.jpg"}
//         text={"We, the EBSB Club at GGSIPU EDC is excited to announce our participation in the Republic Day parade on 26th January. We believe it's a fantastic opportunity for our club members to come together and celebrate the spirit of our nation."}
//         size={"w-full md:w-96"}
//         outt={"/home"}
//         act={""}
//       />
//       {/* <Card
//         imagelink={"https://i.ytimg.com/vi/84ITUmPZz1A/maxresdefault.jpg "}
//         text={"activity2"}
//         size={"w-full md:w-96"}
//         outt={"https://ekbharat.gov.in/Home/Index"}
//         act={"click me"}
//       />
//       <Card
//         imagelink={"https://i.ytimg.com/vi/84ITUmPZz1A/maxresdefault.jpg "}
//         text={"activity3"}
//         size={"w-full md:w-96"}
//         outt={"https://ekbharat.gov.in/Home/Index"}
//         act={"click me"}
//       />
//       <Card
//         imagelink={"https://i.ytimg.com/vi/84ITUmPZz1A/maxresdefault.jpg "}
//         text={"activity4"}
//         size={"w-full md:w-96"}
//         outt={"https://ekbharat.gov.in/Home/Index"}
//         act={"click me"}
//       />
//       <Card
//         imagelink={"https://i.ytimg.com/vi/84ITUmPZz1A/maxresdefault.jpg "}
//         text={"abc"}
//         size={"w-full md:w-96"}
//         outt={"https://ekbharat.gov.in/Home/Index"}
//         act={"click me"}
//       />
//       <Card
//         imagelink={"https://i.ytimg.com/vi/84ITUmPZz1A/maxresdefault.jpg "}
//         text={"abc"}
//         size={"w-full md:w-96"}
//         outt={"https://ekbharat.gov.in/Home/Index"}
//         act={"click me"}
//       />
//       <Card
//         imagelink={"https://i.ytimg.com/vi/84ITUmPZz1A/maxresdefault.jpg "}
//         text={"abc"}
//         size={"w-full md:w-96"}
//         outt={"https://ekbharat.gov.in/Home/Index"}
//         act={"click me"}
//       />
//       <Card
//         imagelink={"https://i.ytimg.com/vi/84ITUmPZz1A/maxresdefault.jpg "}
//         text={"abc"}
//         size={"w-full md:w-96"}
//         outt={"https://ekbharat.gov.in/Home/Index"}
//         act={"click me"}
//       /> */}
//     </div>
//   );
// }

// export default Activities;
