import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";

export default function FAQ() {

    return (
        <div>
            <Helmet>
                <title>FAQ</title>
            </Helmet>

            <Navbar active={"FAQ"} />
            
            <div>
      <section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto mt-20">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Berapa lama minimal melakukan praktik kerja lapangan pada PT.Angkasa Pura 1 ?
                </summary>

                <span>
                waktu minimal melakukan praktik kerja lapangan adalah 2 bulan.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                berapakah jumlah minimal mahasiswa untuk dapat melakukan praktik kerja lapangan pada PT.Angkasa Pura 1 ?
                </summary>

                <span>
                minimal anggota untuk melakukan praktik kerja lapangan adalah 2 orang.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                berapa lama surat ajuan akan dibalas / dikonfirmasi ?
                </summary>

                <span>
                surat ajuan akan di proses sesuai antrian serta minimal 7 hari kerja.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  blablablabla
                </summary>

                <span class="px-4 py-2">
                blablablabla
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                blablablabla
                </summary>

                <span class="px-4 py-2">
                blablablabla
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                blablablabla
                </summary>

                <span class="px-4 py-2">
                blablablabla
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
            
        </div>
        
    )
}