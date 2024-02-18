import React from "react";
import { TbBrandJavascript } from "react-icons/tb";
import "./App.css"
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaSketch, FaRegArrowAltCircleDown, FaFile, FaFacebookSquare, FaTwitter, FaGithub, FaAngry, FaArrowCircleUp, FaVuejs, FaAngular, FaBan, FaReact } from "react-icons/fa";
const App = () => {
  return (
    <>
      <div className="fixed w-full z-50 bg-white drop-shadow-lg py-3 xl:px-16 sm:px-5 flex xl:justify-between sm:justify-around justify-around text-gray-600 items-center ">
        <div>
          <h1 className="text-xl font-bold">TAILWIND STARTER KIT</h1>
        </div>
        <div className="flex gap-8 xl:ms-24 lg:ms-0 items-center lg:flex  sm:hidden hidden">
          <div className="flex border-2 rounded-md py-2 px-5 "><span className="pe-1 "><FaSketch className="text-md mt-0.5" /></span> <a href="" className="text-xs mt-0.5">PRO VERSION</a><span className="text-xs ms-4 px-2 py-0.5 text-white
           rounded-3xl bg-red-500">NEW</span></div>
          <div className="flex"><span className="pe-1"><FaRegArrowAltCircleDown className="text-lg" /></span><a className="text-xs ">DOWNLOAD</a></div>
          <div className="flex"><span className="pe-1"><FaFile className="text-md" /></span><a className="text-xs ">DOCS</a></div>
          <div className="flex"><FaFacebookSquare className="text-lg" /><a className="font-medium "></a></div>
          <div className="flex"><FaTwitter className="text-lg" /><a className="font-medium "></a></div>
          <div className="flex"><FaGithub className="text-lg" /><a className="font-medium "></a></div>


        </div>
        <span className="lg:hidden  sm:block block text-xl" ><FiMenu /></span>
        <span className=" lg:hidden sm:hidden hidden"><IoClose /></span>

      </div>


      <div className="flex justify-center items-center clip_parth">
        <div className="w-1/2 p-10">
          <h1 className="text-4xl text-gray-700 mb-5">A beautiful extension for TailwindCSS.</h1>
          <p className="text-lg text-gray-700 mb-4 ">
            Tailwind Starter Kit is Free and Open Source. It does not change or add any CSS to the already one from TailwindCSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.
          </p>
          {/* <Button>GET STARTED</Button>
          <Button>GITHUB STAR</Button> */}
          <button className="bg-pink-600 py-3 px-5 rounded text-white font-bold mt-3">GET STARTED</button>
          <button className="bg-gray-700 py-3 px-5 rounded text-white font-bold mt-3 ms-5">GITHUB STAR</button>

        </div>
        <div className="w-1/2 ">
          <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/ill_header_3.png"></img>
        </div>
      </div>

      <div className="re bg-slate-100">

      </div>

      <div className="pt-16 bg-slate-100 ">
        <div className="relative container mx-auto xl:px-30 lg:px-0 flex lg:flex-row  sm:flex-col flex-col">
          <div className="lg:w-1/2 sm:w-full flex justify-center">
            <div className="lg:w-1/3  md:w-1/2 rounded-xl overflow-hidden lg:absolute sm:static bottom-10 ">
              <div >
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" className="w-full"></img>
              </div>

              <div className="px-6 py-14 bg-pink-500">
                <h5 className="text-xl font-bold text-white">Great for your awesome project</h5>
                <p className="text-white mt-2">Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.</p>
              </div>

            </div>

          </div>

          <div className="lg:w-1/2 sm:w-full lg:ms-0 md:ms-20 px-10">
            <div className="lg:flex lg:flex-row sm:flex-col  lg:mt-10 sm:mt-20 mt-20">
              <div className="lg:pe-16 sm:pe-0  lg:mt-0 sm:mt-10 mt-10">
                <span className="shadow-lg bg-white inline-block p-4 rounded-full text-2xl text-gray-500"><FaAngry className="" /></span>
                <h4 className="text-xl text-gray-700 mt-4">CSS Components</h4>
                <p className="text-md text-gray-700 mt-2">Tailwind Starter Kit comes with a huge number of Fully Coded CSS components.</p>
              </div>
              <div className=" lg:mt-0 sm:mt-10 mt-10">
                <span className="shadow-lg bg-white inline-block p-4 rounded-full text-2xl text-gray-500"><FaAngry /></span>
                <h4 className="text-xl text-gray-700 mt-4">CSS Components</h4>
                <p className="text-md text-gray-700 mt-2">Tailwind Starter Kit comes with a huge number of Fully Coded CSS components.</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-row sm:flex-col lg:mt-10 sm:mt-10 lg:mt-0 sm:mt-10 mt-10">
              <div className="lg:pe-16 sm:pe-0">
                <span className="shadow-lg bg-white inline-block p-4 rounded-full text-2xl text-gray-500"><FaAngry /></span>
                <h4 className="text-xl text-gray-700 mt-4">CSS Components</h4>
                <p className="text-md text-gray-700 mt-2">Tailwind Starter Kit comes with a huge number of Fully Coded CSS components.</p>
              </div>
              <div className=" lg:mt-0 sm:mt-10 mt-10">
                <span className="shadow-lg bg-white inline-block p-4 rounded-full text-2xl text-gray-500"><FaAngry /></span>
                <h4 className="text-xl text-gray-700 mt-4">CSS Components</h4>
                <p className="text-md text-gray-700 mt-2">Tailwind Starter Kit comes with a huge number of Fully Coded CSS components.</p>
              </div>
            </div>
          </div>


        </div>











        <div className="container xl:mx-auto sm:mx-0 xl:px-30  sm:px-0  lg:mt-44 overflow-hidden">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
            <div className="lg:px-14 sm:px-0 lg:mt-0 sm:mt-20 lg:px-0  sm:ps-36 px-10 px-10 ">
              <span className="shadow-lg bg-white inline-block p-4 rounded-full text-2xl text-gray-500"><FaAngry /></span>
              <h2 className="text-gray-600 text-3xl mt-8">CSS Components</h2>
              <p className="text-gray-500 mt-4 lg:pe-0 ">
                Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colours.
              </p>
              <span className="text-xs py-1 rounded-xl px-1.5 bg-white  mt-5 inline-block">BUTTONS</span>
              <span className="text-xs py-1 rounded-xl px-1.5 bg-white ms-2">INPUTS</span>
              <span className="text-xs py-1 rounded-xl px-1.5 bg-white ms-2">LABELS</span>
              <span className="text-xs py-1 rounded-xl px-1.5 bg-white ms-2">MENUS</span>
              <span className="text-xs py-1 rounded-xl px-1.5 bg-white ms-2">NAVBARS</span>
              <span className="text-xs py-1 rounded-xl px-1.5 bg-white ms-2">PAGINATION </span> <br />

              <span className="text-xs py-1 rounded-xl px-1.5 bg-white mt-2 inline-block">PROGRESSBAR</span>
              <span className="text-xs py-1 rounded-xl px-1.5 bg-white ms-2 mt-2 lnline-block">STYPOGRAPHY</span>
            </div>

            <div className="relative lg:mt-0 sm:mt-20 mt-20 hei">
              <div className="absolute pos ">
                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-info-card.png" className="w-48 h-56 rounded-md"></img>

                <span className="absolute text-sm py-1 font-bold drop-shadow-lg bg-white rounded-3xl px-5 left-32 -bottom-2">GITHUB</span>

              </div>
              <div className="absolute pos1 ">
                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-profile-card.png" className="w-48 h-56 rounded-md margi"></img>

                <span className="absolute text-sm py-2 font-bold drop-shadow-lg bg-pink-400 text-white rounded-sm px-5  margi1  -left-10 -bottom-3">REGULER</span>


              </div>
              <div className="absolute pos2 ">
                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-info-2.png " className="w-48 h-36 rounded-md"></img>

              </div>
              <div className="bg-indigo-600 absolute xl:bottom-20 xl:left-10 sm:bottom-10 sm:right-10 left-0 bottom-20   text-white grid grid-cols-2  xl:py-4 md:py-2 sm:py-3 py-3 px-8  lg:ms-0 sm:ms-32 ms-28 ">
                <div>
                  <h2 className="lg:text-lg md:text-sm text-xs">INDIGO MENU</h2>
                </div>
                <div className="grid grid-cols-3 lg:gap-5 sm:gap-3 gap-3 mt-1 xl:ms-40 md:ms-20 lg:ms-0 sm:ms-20 ms-20 ">
                  <span className="xl:text-lg md:text:md sm:text-xs text-xs" ><FaArrowCircleUp /></span>
                  <span className="xl:text-lg md:text:md sm:text-xs text-xs"><FaBan /></span>
                  <span className="xl:text-lg md:text:md sm:text-xs text-xs"><FaSketch /></span>
                </div>
              </div>
            </div>

          </div>
        </div>



        <div className="container mx-auto lg:px-40 sm:px-0 mt-32">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 text-white gap-8">
              <div >
                <div className="bg-blue-500 text-center p-11 rounded-lg drop-shadow-xl">
                  <span className="p-4 bg-white drop-shadow-lg  inline-block rounded-full "><FaReact className="text-3xl text-blue-400" /></span>
                  <h6 className="text-xl mt-4">ReactJS</h6>
                  <p className="mt-3">A JavaScript library for building user interfaces maintaned by Facebook and community of developers.</p>

                </div>

                <div className="bg-orange-500 text-center p-11 rounded-lg drop-shadow-xl mt-8">
                  <span className="p-4 bg-white drop-shadow-lg  inline-block rounded-full "><TbBrandJavascript className="text-3xl text-blue-400" /></span>
                  <h6 className="text-xl mt-4">JavaScript</h6>
                  <p className="mt-3">Object-oriented programming language that conforms to the ECMAScript specification.</p>

                </div>
              </div>
              <div className="mt-12">
                <div className="bg-green-500 text-center p-11 rounded-lg drop-shadow-xl">
                  <span className="p-4 bg-white drop-shadow-lg  inline-block rounded-full "><FaVuejs className="text-3xl text-blue-400" /></span>
                  <h6 className="text-xl mt-4">Vue.js</h6>
                  <p className="mt-3">An open-source Model–view–viewmodel JavaScript framework for building user interfaces.</p>

                </div>
                <div className="bg-red-500 text-center p-11 rounded-lg drop-shadow-xl mt-8">
                  <span className="p-4 bg-white drop-shadow-lg  inline-block rounded-full "><FaAngular className="text-3xl text-blue-400" /></span>
                  <h6 className="text-xl mt-4">Anguler</h6>
                  <p className="mt-3">a JavaScript-based open-source front-end web framework mainly maintained by Google.</p>

                </div>
              </div>
            </div>

            <div>
              <div className=" pt-36 px-10">
                <span className="shadow-lg bg-white inline-block p-4 rounded-full text-2xl text-gray-500"><FaAngry /></span>
                <h2 className="text-gray-600 text-3xl mt-8">Javascript Components</h2>
                <p className="text-gray-500 mt-4 text-lg">
                  In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users.
                </p>
                <p className="text-gray-500 mt-4 text-lg">
                  We created a set of Components that are dynamic and come to help you.
                </p>

                <span className="text-xs py-1 rounded-xl px-2 bg-white  mt-5 inline-block">BUTTONS</span>
                <span className="text-xs py-1 rounded-xl px-2 bg-white ms-2">INPUTS</span>
                <span className="text-xs py-1 rounded-xl px-2 bg-white ms-2">LABELS</span>
                <span className="text-xs py-1 rounded-xl px-2 bg-white ms-2">MENUS</span>
                <span className="text-xs py-1 rounded-xl px-2 bg-white ms-2">NAVBARS</span>
                <span className="text-xs py-1 rounded-xl px-2 bg-white ms-2">PAGINATION </span> <br />

                <span className="text-xs py-1 rounded-xl px-2 bg-white mt-2 inline-block">PROGRESSBAR</span>
                <span className="text-xs py-1 rounded-xl px-2 bg-white ms-2 mt-2 lnline-block">STYPOGRAPHY</span>
              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto lg:px-40 sm:px-0  md:mt-64 sm:mt-32 mt-20">
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div>
              <div className=" md:pe-20 px-10">
                <span className="shadow-lg bg-white inline-block p-4 rounded-full text-2xl text-gray-500"><FaAngry /></span>
                <h2 className="text-gray-600 text-3xl mt-8">Complex Documentation</h2>
                <p className="text-gray-500 mt-4 text-lg">
                  This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go.
                </p>

                <p className="text-gray-500 mt-4 text-md">
                  Built by Developers for Developers
                </p>
                <p className="text-gray-500 mt-4 text-md">
                  Carefully crafted code for Components
                </p>
                <p className="text-gray-500 mt-4 text-md">
                  Dynamic Javascript Components
                </p>

              </div>
            </div>
            <div className="md:mt-0 sm:mt-20">
              <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/documentation.png" className="w-full  scale-105"></img>
            </div>

          </div>

          <div className="mt-40 text-center md:px-64 sm:px-20 text-lg">
            <h2 className="text-3xl font-bold text-gray-600">Beautiful Example Pages</h2>
            <p className="mt-4 text-gray-600 ">Tailwind Starter Kit is a completly new product built using our past experience in web templates. Take the examples we made for you and start playing with them.</p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 text-center mt-10 text-lg font-bold text-gray-700 relative ">
            <div className="">
              <h2 className="mb-10">Login Page</h2>
              <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/login.jpg " className="rounded-lg md:hover:-mt-10 duration-200  w-full  " ></img>
            </div>
            <div>
              <h2 className="mb-10">Profile Page</h2>
              <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/profile.jpg  " className="rounded-lg hover:-mt-10 duration-200  w-full" ></img>
            </div>
            <div>
              <h2 className="mb-10">Landing Page</h2>
              <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/landing.jpg " className="rounded-lg hover:-mt-10 duration-200  w-full" ></img>
            </div>

          </div>
        </div>

        <div className="bg-gray-600 -mt-48 overflow-hidden ">
          <div className="container mx-auto lg:px-40 sm:px-0">

            <div className="grid grid-cols-2  py-32">
              <div className="mt-72">
                <div>
                  <div className=" pe-20">
                    <span className="shadow-lg bg-white inline-block p-4 rounded-full text-2xl text-gray-500"><FaAngry /></span>
                    <h2 className="text-white text-3xl mt-8">Open Source</h2>
                    <p className="text-gray-400 mt-4 text-lg">
                      Since TailwindCSS is an open source project we wanted to continue this movement too. You can give this version a try to feel the design and also test the quality of the code!
                    </p>

                    <p className="text-gray-400 mt-4 text-md">
                      Get it free on Github and please help us spread the news with a Star!
                    </p>
                    <button className="p-4 font-bold mt-5 bg-slate-700 rounded-lg text-white">GITHUB STAR</button>
                  </div>
                </div>
              </div>
              <div>
                <FaGithub className="font text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 ">
        <div className="container w-5/6 mx-auto lg:px-40 sm:px-0 drop-shadow-2xl  bg-white  -translate-y-20 left-32">
          <div className="text-center py-16 px-20">
            <h2 className="text-4xl">😍</h2>
            <h2 className="text-3xl font-bold">Do you love this Starter Kit?</h2>
            <p className="text-lg mt-5">Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free version for your next project. Build a new web app or give an old project a new look!</p>
            <button className="bg-pink-600 py-3 px-5 rounded text-white font-bold mt-10">GET STARTED</button>
            <button className="bg-gray-700 py-3 px-5 rounded text-white font-bold mt-10 ms-5">HELP WITH A STAR</button>
          </div>
          {/* <hr></hr> */}
        </div>
        <div className="w-5/6 mx-auto  grid md:grid-cols-3 sm:grid-cols-1 container ">
          <div>
            <h2 className="text-3xl font-semibold">Let's keep in touch!</h2>
            <p className="text-md">Find us on any of these platforms, we respond 1-2 business days.</p>

            <span className="px-3 py-2 text-md rounded-full mt-7 text-blue-500    inline-block bg-white drop-shadow-xl"><FaTwitter className="inline-block " /></span>
            <span className="px-3 py-2 text-md rounded-full mt-3  text-blue-500  ms-2 inline-block bg-white drop-shadow-xl"><FaTwitter className="inline-block " /></span>
            <span className="px-3 py-2 text-md rounded-full mt-3  text-blue-500  ms-2 inline-block bg-white drop-shadow-xl"><FaTwitter className="inline-block " /></span>
            <span className="px-3 py-2 text-md rounded-full mt-3  text-blue-500  ms-2 inline-block bg-white drop-shadow-xl"><FaTwitter className="inline-block " /></span>
            <p className="mt-5">Currently v1.1.0. Code licensed MIT, docs CC BY 4.0.</p>
          </div>
          <div className="md:mt-0 sm:mt-20 mt-10">
            <span className="block md:ms-80 sm:ms-0 mt-2 text-gray-400">USEFUL LINKS</span>
            <span className="block md:ms-80 sm:ms-0 mt-2 text-gray-500 font-semibold">About Us</span>
            <span className="block md:ms-80 sm:ms-0 mt-2 text-gray-500 font-semibold">Blog</span>
            <span className="block md:ms-80 sm:ms-0 mt-2 text-gray-500 font-semibold">Github</span>
            <span className="block md:ms-80 sm:ms-0 mt-2 text-gray-500 font-semibold">Free Products</span>
          </div>
          <div className="md:mt-0 sm:mt-20 mt-10">
            <span className="block md:ms-56 sm:ms-0  mt-2 text-gray-400">OTHER RESOURCES</span>
            <span className="block md:ms-56 sm:ms-0  mt-2 text-gray-500 font-semibold">MIT License</span>
            <span className="block md:ms-56 sm:ms-0  mt-2 text-gray-500 font-semibold">Terms & Conditions</span>
            <span className="block md:ms-56 sm:ms-0  mt-2 text-gray-500 font-semibold">Privacy Policy</span>
            <span className="block md:ms-56 sm:ms-0  mt-2 text-gray-500 font-semibold">Contact Us</span>
          </div>
        </div>
        <hr className="border-b-5 mt-5 pb-5 mx-auto w-10/12 border-gray-400" />
        <p className="text-center text-md pb-5">Copyright © 2024 Tailwind Starter Kit by Creative Tim.</p>
      </div>



    </>
  );
}

export default App;