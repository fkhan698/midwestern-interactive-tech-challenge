import { useState } from "react";
import styles from "../styles/Challenge.module.css";
export default function Header() {
  //State variables

  const [innerHTML, setInnerHTML] = useState([]);
  const [data, setData] = useState([]);

  const showArrayResults = () => {
    complete === true ? alert("This action has been completed") : "";
    //Array 1
    let array1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];

    //Array 2
    let array2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];

    //Merge both arrays
    let finalArray = array1.concat(array2);

    //Use filter method to remove duplicates
    finalArray = finalArray.filter((item, index) => {
      return finalArray.indexOf(item) == index;
    });

    setData(finalArray);
  };

  const complete = data.length > 0;

  return (
    <div>
      <h1 className={styles.Header}>
        <u className={styles.underline}>Heading </u>One
      </h1>
      <p className={styles.paragraph}>
        Remove the duplicates in 2 Javascript objects and output the list of
        distinct names in an unordered list when{" "}
        <span className={styles.span} onClick={showArrayResults}>
          this link{" "}
        </span>
        is clicked.If the operation has been completed already notify the user
        that this has already been done.
      </p>
      <p className={styles.paragraph}>
        {complete ? JSON.stringify(data, null, 2) : null}
      </p>
    </div>
  );
}
