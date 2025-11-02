
import React, { useState } from "react";
import {
  Button,
  
  FileInput,
  
  LoadingOverlay,
  
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import {  FaPaperclip } from "react-icons/fa6";
import { useNavigate, useParams,  } from "react-router";
import { isNotEmpty, useForm } from "@mantine/form";
import { getBase64 } from "../../Services/Utilities";
import { applyJob } from "../../Services/JobService";
import { errorNotifiaction, successNotification } from "../../Services/NotificationService";
import { useSelector } from "react-redux";


const ApplicationForm = () => {

   const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();
  const id= useParams().id;
  const user= useSelector((state)=>state.user)

  const handleSubmit = async () => {

    setSubmit(true);

    let resume= await getBase64(form.getValues().resume);
    let applicant={...form.getValues(),applicantId:user.id,resume:resume.split(',')[1]};


    applyJob(id,applicant)
    .then((res)=>{
      setSubmit(false);
      
      successNotification("Success","Application Submitted Successfully")
      navigate("/job-history")
      
    })
    .catch((error)=>{
      setSubmit(false)
      errorNotifiaction("Error",error.response.data.errorMessage)
      console.error(error);
     
    })





    
  };

  const handlePreview = () => {
    form.validate();
    if(!form.isValid()) return;

    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(form.getValues())
  };



 const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      resume:null,    

      coverLetter: "",
    },
    validate: {
      name: isNotEmpty("name cannot be empty"),
      email: isNotEmpty("email cannot be empty"),
      phone: isNotEmpty("phone number  cannot be empty"),
      website: isNotEmpty("website cannot be empty"),
      resume: isNotEmpty("resume  cannot be empty"),

      
    },
  });


  return (
    <div>

      <LoadingOverlay
        className="!fixed"
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 1 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />

       <div className="text-xl max-[700px]:text-lg font-semibold mb-5">
          Submit Your Application
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-10 max-[700px]:gap-5 [&>*]:w-1/2 max-[700px]:[&>*]:w-full max-[700px]:flex-wrap ">

          
            <TextInput
              {...form.getInputProps("name")}
              label="Full Name"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : " "
              }`}
              placeholder="Enter Name"
              withAsterisk
            />
            <TextInput
              {...form.getInputProps("email")}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : " "
              }`}
              label="Email"
              placeholder="Enter email"
              withAsterisk
            />
          </div>
          <div className="flex gap-10 max-[700px]:gap-5 [&>*]:w-1/2 max-[700px]:[&>*]:w-full max-[700px]:flex-wrap">
            <NumberInput
              {...form.getInputProps("phone")}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : " "
              }`}
              label="Phone Number"
              hideControls
              placeholder="Enter Numkber"
              withAsterisk
              min={0}
              max={9999999999}
              clampBehavior="strict"
              step={null}
            />
            <TextInput
              {...form.getInputProps("website")}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : " "
              }`}
              label="Personal Website"
              placeholder="Enter Url"
              withAsterisk
            />
          </div>

          <FileInput
            {...form.getInputProps("resume")}
            accept="application/pdf"
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : " "}`}
            withAsterisk
            leftSection={<FaPaperclip />}
            label="Attach your CV"
            placeholder="Attach your CV"
          />

          <Textarea
            {...form.getInputProps("coverLetter")}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : " "}`}

            label="Cover Letter"
            placeholder="Cover Letter...."
            minRows={4}
            autosize
          />

          {!preview && (
            <Button
              className="m-4"
              color="brightSun.4"
              onClick={handlePreview}
              variant="light"
            >
              Preview
            </Button>
          )}

          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2 max-[700px]:gap-1">
              <Button
                fullWidth
                className="m-4"
                color="brightSun.4"
                onClick={handlePreview}
                variant="outline"
              >
                Edit
              </Button>

              <Button
                fullWidth
                className="m-4"
                color="brightSun.4"
                onClick={handleSubmit}
                variant="light"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      
    </div>
  )
}

export default ApplicationForm
