import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <div className="w-full bg-[#27695f] lg:h-screen">
        <div className="lg:w-10/12 w-full mx-auto flex ">
          <div className="lg:w-4/12 w-screen lg:mt-0 -mt-1">
            <img src="bg_top.jpg" alt="" className="lg:absolute relative lg:bottom-0 lg:left-48 -left-10 h-full" />
          </div>
          <div className="lg:w-6/12 w-full lg:mt-48 mt-32 lg:ml-24 -ml-56 z-30">
            <motion.div className="transform translate-x-4 translate-y-4 "
              initial={{ x: 250 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
            >

              <p className="mb-5 text-white">
                # Hidupkan<span className="font-bold text-white"> Manfaat</span>
              </p>
              <div className=" bg-[#fab70f] h-1 mb-5 w-24"></div>
              <p className="lg:text-4xl text-2xl  uppercase  text-white">Alam </p>
              <p className="lg:text-4xl text-2xl  uppercase  text-white">seimbangkan hidup</p>
              <p className="lg:text-4xl text-2xl  uppercase  text-white mt-5">Mengajarkan Bagaimana</p>
              <p className="lg:text-4xl text-2xl  uppercase  text-white">Menjaga Kehidupan</p>
              <p className="lg:text-4xl text-2xl  uppercase  text-white">Itu Sendiri. </p>
            </motion.div>
            <motion.img src="divider_top.png" alt="" className="lg:mt-5 mt-16 lg:-mb-0 -mb-14 lg:-ml-5 ml-auto lg:w-[250px] w-[150px]"
              initial={{ y: 250 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <div className="lg:w-2/12 w-5/12 ">
            <img src="logo.png" alt="" className="ml-auto" />
          </div>
        </div>
      </div>
      <div className="lg:w-11/12 w-full mx-auto lg:mt-28 mt-14 flex lg:flex-row flex-col lg:pl-7 pl-0">
        <motion.div className="lg:w-6/12 w-11/12 relative mx-auto z-30 "
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <p className="lg:text-4xl text-3xl text-[#27695f] uppercase">berawal tumbuh.</p>
          <p className="lg:text-4xl text-3xl text-[#27695f] uppercase">berkembah penuh.</p>
          <div className="bg-[#fab70f] h-1 w-10 mt-5 mb-3"></div>
          <p className="text-xs mb-1">Kami adalah Esbi Indonesia, <span className="italic">holding company</span> dari PT Unique Herbamed Indonesia yang telah belasan tahun berkontribusi besar di dunia herbal.</p>
          <p className="text-xs mb-1">Kini, saatnya kami mengembangkan diri secara penuh seiring tumbuhnya semangat masyarakat Indonesia akan pentingnya hidup sehat.</p>
          <p className="text-xs mb-1">Tumbuh menjadi lebih besar. Berkembang memberi lebih manfaat. </p>
          <div className="flex lg:px-5 px-0 lg:py-10 py-5">
            <img src="us-farma.png" alt="" className=" lg:h-[120px] lg:w-[120px] h-[100px] w-[100px] lg:mr-10 mr-2" />
            <img src="us-food.png" alt="" className="  lg:h-[120px] lg:w-[120px] h-[100px] w-[100px] lg:mr-10 mr-2" />
            <img src="us-care.png" alt="" className="  lg:h-[120px] lg:w-[120px] h-[100px] w-[100px]" />
          </div>
        </motion.div>
        <div className="lg:w-8/12 w-11/12 flex lg:-mt-28 mt-0 mx-auto ">
          <img src="bg_about.jpg" alt="" className="absolute right-0 lg:top-auto  lg:h-[500px] h-[200px] w-screen -z-30" />
          <motion.div className="lg:ml-16 ml-0 z-50 relative lg:mt-28 mt-5"
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <p className="uppercase lg:text-lg text-sm text-[#27695f]">mengawalinya dengan tumbuh.</p>
            <p className="uppercase lg:text-lg text-sm text-[#27695f]">Berkembang membuahkan manfaat.</p>
            <p className="text-sm text-gray-900">Menjadi benih kebaikan, untuk kehidupan </p>
            <p className="text-sm text-gray-900">yang lebih baik.</p>
          </motion.div>
        </div>
      </div>
    </>
  )
}
