import Button from "../Button/Button";
import styles from "./Form.module.css";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
const Form = () => {
  const [name,Setname] = useState("name")
  const [email,Setemail] = useState("djbsv")
  const [text,Settext] = useState("hbfjha")

  const onSubmit = (event)=>{
    event.preventDefault();
    Setname(event.target[0].value);
    Setemail(event.target[1].value);
    Settext(event.target[2].value);

    console.log({name,email,text})
  }

  // const onviaCAllSubmit = ()=>{
  //   console.log("iam from call")
  // }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<RiMessage2Fill fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8}/>
          </div>
          <div style={{display:"flex",justifyContent:"end"}}>
            <Button text="SUBMIT" />
          </div>
          <div>
            {name + " " +email + " " +text + " "}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default Form;
