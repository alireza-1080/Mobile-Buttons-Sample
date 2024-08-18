import "./MobileButton.css";
import { useSelector, useDispatch } from "react-redux";
import { addValue, removeValue } from "../../Redux/categoriesManagerSlice";
import { useEffect, useRef } from "react";

function MobileButton({ title, icon: Icon }) {
  const selectedCategories = useSelector(state => state.categoriesManager);
  const dispatch = useDispatch();
  const mobileButtonConatiner = useRef(null)

  const clickHandler = (title) => {
    if (selectedCategories.length) {
      const index = selectedCategories.findIndex(item => {
        return item === title;
      })
      Boolean(index === -1) ? dispatch(addValue(title)) : dispatch(removeValue(index))
    } else {
      dispatch(addValue(title))
    }
  }

  useEffect(() => {
    if (selectedCategories.some(item => {
      return item === title;
    })) {
      mobileButtonConatiner.current.classList.add("active");
    } else {
      mobileButtonConatiner.current.classList.remove("active")
    }
  }, [selectedCategories])

  return (
    <div ref={mobileButtonConatiner} className="mobile-button-container" onClick={() => clickHandler(title)}>
      <Icon className="icon" />
    </div>
  )
}

export default MobileButton;