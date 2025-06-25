import React, { useState } from "react";
import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from "@mantine/core";
import { FaArrowLeftLong, FaPaperclip } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router";
const ApplyJobComp = () => {

  const [preview, setPreview] = useState(false);
  const [submit, setSubmit]= useState(false);
  const [sec, setSec]= useState(5);
  const navigate= useNavigate();


  const handleSubmit = () => {

    setSubmit(true);

    let x=5;

    setInterval(()=>{
      x--;
      setSec(x);
      if(x===0){
        navigate("/find-jobs")

      }
    },1000)


  }


  const handlePreview = ()=>{
    setPreview(!preview);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <>
    <div className="w-2/3 mx-auto">

    <LoadingOverlay className="!fixed" visible={submit} zIndex={1000} overlayProps={{ radius: 'sm', blur: 1 }}
    loaderProps={{ color: 'brightSun.4', type: 'bars' }} />




      <div className="flex justify-between  ">
        <div
          onClick={() => navigate("/jobs")}
          className="flex gap-2 items-center  cursor-pointer"
        >
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14"
              src={`./src/assets/Icons/Google.png`}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-2xl">Software Engineer III</div>
            <div className="text-lg text-mine-shaft-300 ">
              Google &#x2022; 3 days ago &#x2022; 48 Applicants
            </div>
          </div>
        </div>
      </div>

      <Divider my="xl" />

      <div className="text-xl font-semibold mb-5">Submit Your Application</div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:!w-1/2">
          <TextInput label="Full Name" readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`}  placeholder="Enter Name" withAsterisk  />
          <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`} label="Email" placeholder="Enter email" withAsterisk />
        </div>
        <div className="flex gap-10 [&>*]:!w-1/2">
          <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`} label="Phone Number" hideControls placeholder="Enter Numkber" withAsterisk min={0} max={9999999999} clampBehavior="strict" step={null}/>
          <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`} label="Personal Website" placeholder="Enter Url" withAsterisk />
        </div>

        <FileInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`}  withAsterisk leftSection={<FaPaperclip/>} label="Attach your CV" placeholder="Attach your CV"/>

        <Textarea readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":" "}`} withAsterisk label="Cover Letter" placeholder="Cover Letter...." minRows={4} autosize/>

        {!preview &&  <Button className='m-4'  color='brightSun.4' onClick={handlePreview} variant='light' >Preview</Button>}

        {

          preview && <div className="flex gap-10 [&>*]:w-1/2">

             <Button fullWidth className='m-4'  color='brightSun.4' onClick={handlePreview} variant='outline' >Edit</Button>

              <Button fullWidth className='m-4'  color='brightSun.4' onClick={handleSubmit} variant='light' >Submit</Button>





          </div>





        }

       
      </div>
    </div>

    <Notification title="Application Submitted!" color="teal" mt="md" icon={<FaCheck/>} withCloseButton={false} withBorder className={`!border-bright-sun-400 transition duration-300 ease-in-out !fixed top-0 left-[35%] ${submit?"translate-y-0":" -translate-y-20"} z-[10001]`} >


    Redirecting to Find Jobs in {sec} seconds...

    

    </Notification>

    </>
  );
};

export default ApplyJobComp;
