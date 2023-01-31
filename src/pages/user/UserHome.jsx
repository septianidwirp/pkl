import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import React from "react";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

export default function UserHome() {
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = React.useState(0);

    const maxPerPage = 6;

    React.useEffect(() => {

        async function getData() {
            const data = (await axios.get(`${process.env.REACT_APP_API_HOST}/list_division_fields`)).data;
            console.log('data', data.data);
            setData(data.data.map((item) => ({
                title: item.division_name,
                requirements: item.list_study_field
            })));
        }

        getData();

    }, []);

    return (
        <div className="animate-fade animate-once animate-delay-100">
            <Helmet>
                <title>Web Penerimaan PKL Angkasa Pura 1 Bandar Juanda Surabaya</title>
            </Helmet>

            <Navbar active={"Beranda"} />

            <div className="mt-16 px-32 flex flex-col justify-center w-cover h-[680px] bg-cover bg-no-repeat" style={{ background: "url('/home-banner.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <b className="break-normal text-6xl text-white animate-fade-down animate-once animate-ease-linear animate-normal animate-delay-700">Penerimaan Online Siswa PKL</b>
                <span className="mt-6 text-white animate-fade-down animate-once animate-ease-linear animate-normal animate-delay-700">Selamat datang di Website lingkungan PT.Angkasa Pura I (PERSERO) Cabang Bandar Udara Internasional Juanda Surabaya</span>
                <div className="flex flex-row">
                    <button text={"Daftar"} onClick={() => { navigate("/daftar") }} className="transition ease-in-out delay-150 duration-300 px-6 py-2 mt-12 mr-2 w-fit rounded-md bg-[#35A5D9] hover:bg-white hover:text-[#35A5D9] hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 font-normal text-white animate-jump-in animate-once animate-ease-in animate-normal animate-delay-700">Daftar</button>
                    <a href="#mekanisme" className="transition ease-in-out animate-delay-[1300ms] duration-300 px-6 py-2 mt-12 ml-2 w-fit rounded-md bg-white text-[#35A5D9] hover:bg-[#35A5D9] hover:text-white font-normal animate-jump-in animate-once animate-ease-in animate-normal animate-delay-700">Mekanisme</a>
                </div>
            </div>

           <div data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
            <div className="px-32 py-12 bg-[#F3FBFF] flex flex-col min-h-[100vh]">
                <b className="mt-5 text-4xl text-[#35A5D9]">Lowongan Divisi</b>
                <span className="mt-7">Sebelum melakukan pendaftaran silahkan cek kesesuaian  posisi yang ingin kalian lamar dengan ilmu keahlian kalian</span>
                <div className="mt-7 flex flex-row grid grid-cols-3 divide-x">
                    {
                        data.map((e, i) => {
                            if (i >= currentPage && i < currentPage + maxPerPage) return (
                                <div key={i} className="mt-5 bg-white rounded-xl p-16 w-24 h-52 flex flex-col justify-center min-w-[25vw] ">
                                    <h2 class="mb-2 text-lg font-semibold text-[#35A5D9]">{e.title}</h2>
                                    <ul class="space-y-1 max-w-md list-disc list-inside text-gray-500">
                                        {
                                            e.requirements &&
                                            e.requirements.map((f, j) => {
                                                return (
                                                    <li key={j}>{f}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                </div>

                <div className="flex w-full items-end justify-end">
                    <div className="mt-7 flex gap-2">
                        <button className="border rounded w-6 h-6 flex items-center justify-center hover:bg-blue-500" onClick={() => {
                            if (currentPage >= maxPerPage) setCurrentPage(currentPage - maxPerPage)
                        }
                        }><BsChevronLeft /></button>
                        {
                            data.map((_e, i) => {

                                if (i % maxPerPage === 0) {

                                    let num = i === 0 ? 1 : i / maxPerPage + 1;
                                    return (
                                        <button className={`border rounded hover:bg-blue-500 ${currentPage === i ? "bg-blue-600 text-white" : ""} w-6 h-6 text-sm`} onClick={() => setCurrentPage(i)}>{num}</button>
                                    )
                                }

                            })
                        }
                        <button className="border rounded w-6 h-6 flex items-center justify-center hover:bg-blue-500" onClick={() => {
                            if (currentPage < data.length - 1) setCurrentPage(currentPage + maxPerPage)
                        }
                        }><BsChevronRight /></button>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">

            <div className="px-32 py-12 bg-white flex flex-col items-center justify-center" id="mekanisme">
                <b className="mt-5 text-4xl text-[#35A5D9]">Mekanisme</b>

                <div className="mt-7">
                    <span>Berikut adalah tata cara pendaftaran siswa OJT (On the Job Training) / PKL : </span>
                    <ol class="mt-7 space-y-1 list-decimal list-inside">
                        <li>Calon peserta mendaftar secara online melalui internet dengan website <a href="/" className="text-[#35A5D9] hover:underline">https://pkl.angkasapura1.co.id</a></li>
                        <li>Sebelum mengisi form registrasi diwajibkan bagi calon peserta untuk melihat kesesuaian unit kerja, bidang keilmuan dan kuota yang tersedia melalui menu <b>Pendafataran</b> atau klik <a href="/" className="text-[#35A5D9] hover:underline">disini</a> (Pendaftaran paling lambat 1 bulan sebelum waktu mulai PKL)</li>
                        <li>Calon peserta mengisi form registrasi dengan lengkap dan mengunggah surat permohonan dari kampus yang ditujukan kepada General Manager PT Angkasa Pura I Bandar Udara Juanda - Surabaya</li>
                        <li>Setelah mendaftar, mohon simpan nomor registrasi yang muncul setelah data berhasil tersimpan dalam sistem.</li>
                        <li>Silahkan cek berkala pengajuan ada melalui menu <b>Cek Ajuan</b> atau klik <a href="/cekajuan" className="text-[#35A5D9] hover:underline">disini</a></li>
                    </ol>
                </div>
            </div>

            <div className="px-32 py-12 bg-white flex flex-col items-center justify-center">
                <b className="mt-5 text-4xl text-[#35A5D9]">Company Profile</b>

                <div className="mt-7">
                    <iframe width="720" height="480" src="https://www.youtube.com/embed/eeplXFdctXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="mt-7">
                    {/* embed the second video in here using width=720 and height 480 */}
                </div>
            </div>
            </div>

            <Footer />
        </div>
    )
}