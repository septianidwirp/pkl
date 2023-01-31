import React from 'react';
import Button from '../../../components/Button';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function ActionAlerts() {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      </Stack>
    );
}
const FormPendaftaran = props => {

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        school_origin: '',
        total_trainee: 0,
        division_id: 0,
        study_field_id: 0,
        start_date: '',
        end_date: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [file, setFile] = React.useState();
    function handleChangeFile(event) {
        setFile(event.target.files[0])
    }

        const current = new Date();
        values.month=(current.getMonth()+1)
        values.date=(current.getDate())
        values.year=(current.getFullYear())
        if( values.month ==1||values.month==2||
            values.month ==3||values.month==4||
            values.month ==5||values.month==6||
            values.month ==7||values.month==8||
            values.month ==9){
            values.month= '0'+values.month;
        }
        if( values.date ==1||values.date==2||
            values.date ==3||values.date==4||
            values.date ==5||values.date==6||
            values.date ==7||values.date==8||
            values.date ==9){
            values.date= '0'+values.date;
        }
        values.now=values.year+'-'+values.month+'-'+values.date;

    const handleSubmit = async (event) => {
        event.preventDefault()
        const date_start = values.start_date + 'T00:00:00Z';
        const date_end = values.end_date + 'T00:00:00Z';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('school_origin', values.school_origin);
        formData.append('total_trainee', values.total_trainee);
        formData.append('division_id', values.division_id);
        formData.append('study_field_id', values.study_field_id);
        formData.append('start_date', date_start);
        formData.append('end_date', date_end);
        await axios.post(
            `${process.env.REACT_APP_API_HOST}/submissions`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
            .then(function (response) {
                // handle success
                localStorage.setItem('code_submission', response.data.code_submission);
                localStorage.setItem('jumlah_anggota', values.total_trainee);
                props.showPendaftaran(false);
                props.showTrainee(true);
                console.log('axios', response);
            })
            .catch(function (error) {
                // handle error
                
                console.log(error);
            });

          //  if(error!=""){
          //      alert(error);
          //  }
        
    }
var error

    if(values.total_trainee < 2){
        error="Jumlah anggota minimal 2 orang";
    }
    if(values.name==""){
        error="Isilah Nama anda / Ketua kelompok"}
    
    if(values.study_field_id==""){
        error="Isilah bidang keilmuan anda."
    }
    if(values.school_origin==""){
        error=<div class="p-8 space-y-4 fixed bottom-0 right-0 ">
        <div class="flex w-96 shadow-lg rounded-lg">
    <div class="bg-yellow-600 py-4 px-6 rounded-l-lg flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="fill-current text-white" width="20" height="20"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    </div>
    <div class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
      <div>Isilah asal sekolah anda.</div>
      <button onclick>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
      </button>
    </div>
  </div>
        </div>
    }
    if(values.division_id==""){
        error=<div class="p-8 space-y-4 fixed bottom-0 right-0 ">
        <div class="flex w-96 shadow-lg rounded-lg">
    <div class="bg-yellow-600 py-4 px-6 rounded-l-lg flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="fill-current text-white" width="20" height="20"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    </div>
    <div class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
      <div>Pilihlah divisi yang diinginkan!</div>
      <button>
      <i class="fa fa-times"></i>
      </button>
    </div>
  </div>
        </div>
    }
    return (
        
        <div className="mt-12 mb-24 flex flex-col items-center">
            <b className="mt-5 mb-5 text-3xl text-[#35A5D9]">Data Kelompok</b>
            <Helmet>
                <title>Pendaftaran</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Nama (Ketua Kelompok)</label>
                    <input onChange={handleChange('name')} value={values.name} type="text" id="base-input" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40rem] p-2.5" />
                </div>
                <div className="mt-4">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Email (Ketua Kelompok)</label>
                    <input onChange={handleChange('email')} value={values.email} type="text" id="base-input" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40rem] p-2.5" />
                </div>
                <div className="mt-4">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Asal Sekolah</label>
                    <input onChange={handleChange('school_origin')} value={values.school_origin} type="text" id="base-input" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40rem] p-2.5" />
                </div>
                <div className="mt-4">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Jumlah Anggota (Termasuk Ketua)</label>
                    <input type="text" onChange={handleChange('total_trainee')} value={values.total_trainee} id="base-input" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40rem] p-2.5" />
                </div>
                <div className="mt-4">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Divisi</label>
                    <select id="countries" onChange={handleChange('division_id')} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40rem] p-2.5">
                        <option value="">Choose Option</option>
                        {props.dataDivisi?.map((val, index) => (
                            <option key={index} value={val.id}>{val.division_name}</option>
                        ))}
                    </select>
                </div>
                <div className="mt-4">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Bidang Keilmuan</label>
                    <select id="countries" onChange={handleChange('study_field_id')} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40rem] p-2.5">
                        <option value="">Choose Option</option>
                        {props.dataKeilmuan?.map((val, index) => (
                            <option key={index} value={val.id}>{val.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mt-4">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Tanggal Mulai</label>
                    <input type="date" min={values.now} onChange={handleChange('start_date')} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40rem] p-2.5" />
                </div>
                <div className="mt-4">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Tanggal Selesai</label>
                    <input type="date" min={values.start_date} onChange={handleChange('end_date')} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40rem] p-2.5" />
                </div>

                <div className="mt-4">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Upload Surat Pengantar (maksimal 2 mb)</label>
                    <input type="file" onChange={handleChangeFile} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40rem] p-2.5" id="file" />
                </div>

                <Button text={"Submit"} type={"submit"} className="mt-12 w-[40rem] rounded-md bg-[#35A5D9] hover:bg-[#E7F7FF] hover:text-[#35A5D9] font-normal" />
            </form>
                            {error}
        </div>
        
    );
}

export default FormPendaftaran;