import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const { useEffect, useState } = React;

const SelectNumeric = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (props.reset) {
      setValue(0);
    }
  }, [props.reset]);

  const increment = () => {
    setValue((value) => value + 1);
  };

  const decrement = () => {
    setValue((value) => value - 1);
  };

  const changeHandler = (event) => {
    event.persist();
    props.changed();
    setValue(event.target.value);
    //let value = event.target.value;

    //setValue(prevState => ({
    //  item: { ...prevState.value, [event.target.value]: value //}
    //}))
  };
  return (
    <div>
      <label for={props.label}>{props.labelName}</label>
      <button onClick={decrement}>-</button>
      <input
        type="number"
        name={props.label}
        id={props.label}
        value={value}
        onChange={changeHandler}
      ></input>
      <button onClick={increment}>+</button>
    </div>
  );
};

/* class SelectNumeric extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  }

  decrement = () => {
    if (this.state.value !== 0) {
      this.setState({ value: this.state.value - 1 });
    }
  }

  changeHandler = (event) => {
    event.persist();
    this.props.changed();
    //setValue(event.target.value)

    let value = event.target.value;

    this.setState(prevState => ({
      item: { ...prevState.value, [event.target.value]: value }
    }))
  };

  render() {
    return (
      <div>
        <label for={this.props.label}>{this.props.labelName}</label>
        <button onClick={this.decrement}>-</button>
        <input type="number" 
          name={this.props.label} 
          id={this.props.label} 
          value={this.state.value}
          onChange={this.changeHandler}>
        </input>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
} */

const CustomTextField = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (props.reset) {
      setValue("");
    }
  }, [props.reset]);

  const handleChange = (event) => {
    event.persist();
    setValue(event.target.value);
    //props.changed();
  };

  return (
    <div>
      <label for={props.label}>{props.labelName}</label>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        name={props.label}
        id={props.label}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

const TextField = (props) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (props.reset) setValue("");
  }, [props.reset]);
  const handleChange = (event) => {
    setValue(event.target.value);
    props.changed();
  };
  return (
    <div>
      <label for={props.label}>{props.labelName}</label>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        name={props.label}
        id={props.label}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

/* class CustomTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div>
        <label for={this.props.label}>{this.props.labelName}</label>
        <div className="formWrapper">
          <i>
            <CustomTextFieldIcon iconName={this.props.label} />
          </i>
          <input type="text" name={this.props.label} id={this.props.label} placeholder={this.props.placeholder}></input>
        </div>
      </div>
    );
  }
} */

function PersonIcon(props) {
  return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.544 12.4517C14.5142 12.3084 14.4286 12.1828 14.3061 12.1025C14.1837 12.0222 14.0343 11.9939 13.891 12.0237C13.7476 12.0536 13.622 12.1391 13.5417 12.2616C13.4615 12.384 13.4332 12.5334 13.463 12.6767C13.4809 12.761 13.4796 12.8482 13.4594 12.932C13.4391 13.0158 13.4004 13.0939 13.346 13.1607C13.293 13.2268 13.2256 13.2801 13.1491 13.3165C13.0725 13.3528 12.9887 13.3714 12.904 13.3707H2.11999C2.03524 13.3714 1.95144 13.3528 1.87489 13.3165C1.79833 13.2801 1.73102 13.2268 1.67799 13.1607C1.62359 13.0939 1.58484 13.0158 1.56459 12.932C1.54435 12.8482 1.54312 12.761 1.56099 12.6767C1.84465 11.3362 2.5714 10.1301 3.62413 9.25302C4.67686 8.3759 5.99424 7.87876 7.36399 7.84173H7.50999H7.65699C8.63037 7.86601 9.58364 8.12397 10.4364 8.59387C11.2892 9.06378 12.0165 9.73184 12.557 10.5417C12.6385 10.6633 12.7651 10.7476 12.9087 10.7759C13.0524 10.8042 13.2014 10.7743 13.323 10.6927C13.4446 10.6112 13.5288 10.4847 13.5571 10.341C13.5855 10.1973 13.5555 10.0483 13.474 9.92673C12.5846 8.59714 11.2768 7.60256 9.75799 7.10073C10.3897 6.62885 10.8569 5.97002 11.0931 5.21771C11.3293 4.46539 11.3226 3.6578 11.074 2.90949C10.8254 2.16118 10.3474 1.51016 9.70799 1.04879C9.06853 0.587411 8.30002 0.339111 7.51149 0.339111C6.72296 0.339111 5.95445 0.587411 5.31499 1.04879C4.67553 1.51016 4.19759 2.16118 3.94897 2.90949C3.70035 3.6578 3.69368 4.46539 3.9299 5.21771C4.16612 5.97002 4.63324 6.62885 5.26499 7.10073C4.06801 7.49435 2.9957 8.19605 2.15578 9.13532C1.31586 10.0746 0.737906 11.2184 0.479991 12.4517C0.428528 12.6958 0.432156 12.9483 0.49061 13.1907C0.549064 13.4332 0.660872 13.6596 0.817889 13.8534C0.974906 14.0472 1.17318 14.2036 1.39826 14.311C1.62334 14.4185 1.86956 14.4744 2.11899 14.4747H12.901C13.1508 14.475 13.3974 14.4196 13.623 14.3123C13.8486 14.2051 14.0474 14.0488 14.2048 13.855C14.3623 13.6611 14.4745 13.4345 14.5331 13.1917C14.5918 12.9489 14.5955 12.6961 14.544 12.4517ZM4.86099 4.09573C4.86086 3.57724 5.01283 3.07011 5.29808 2.63715C5.58333 2.20418 5.98932 1.8644 6.46577 1.6599C6.94222 1.4554 7.4682 1.39516 7.97855 1.48664C8.4889 1.57812 8.9612 1.8173 9.33696 2.17456C9.71271 2.53182 9.97541 2.99146 10.0925 3.49654C10.2096 4.00163 10.176 4.52997 9.99577 5.01613C9.81556 5.50229 9.4967 5.9249 9.07867 6.23163C8.66064 6.53835 8.16182 6.71571 7.64399 6.74173H7.37699C6.69859 6.70665 6.05949 6.41268 5.5914 5.9204C5.1233 5.42812 4.86188 4.77503 4.86099 4.09573Z" fill="white"/>
  </svg>
}

function EmailIcon(props) {
  return <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.432 6.38894C14.5784 6.38894 14.7188 6.33078 14.8223 6.22726C14.9258 6.12374 14.984 5.98334 14.984 5.83694V2.22094C14.9832 1.63559 14.7503 1.07443 14.3364 0.660522C13.9225 0.246614 13.3613 0.0137332 12.776 0.0129395H3.05999C2.47464 0.0137332 1.91348 0.246614 1.49957 0.660522C1.08567 1.07443 0.852783 1.63559 0.85199 2.22094L0.85199 8.59694C0.852783 9.18229 1.08567 9.74345 1.49957 10.1574C1.91348 10.5713 2.47464 10.8041 3.05999 10.8049H12.776C13.3613 10.8041 13.9225 10.5713 14.3364 10.1574C14.7503 9.74345 14.9832 9.18229 14.984 8.59694C14.9905 8.52077 14.9811 8.44408 14.9564 8.37173C14.9317 8.29938 14.8923 8.23294 14.8406 8.17664C14.7889 8.12033 14.726 8.07538 14.656 8.04462C14.586 8.01387 14.5104 7.99799 14.434 7.99799C14.3575 7.99799 14.2819 8.01387 14.2119 8.04462C14.142 8.07538 14.0791 8.12033 14.0274 8.17664C13.9757 8.23294 13.9363 8.29938 13.9116 8.37173C13.8869 8.44408 13.8775 8.52077 13.884 8.59694C13.8827 8.88827 13.7664 9.1673 13.5604 9.37331C13.3543 9.57931 13.0753 9.69562 12.784 9.69694H3.05999C2.76866 9.69562 2.48963 9.57931 2.28363 9.37331C2.07762 9.1673 1.96131 8.88827 1.95999 8.59694V2.33794L6.75999 5.31994C7.10943 5.53904 7.51354 5.65524 7.92599 5.65524C8.33844 5.65524 8.74254 5.53904 9.09199 5.31994L13.892 2.33794V5.83794C13.8922 5.98211 13.9488 6.12047 14.0498 6.22343C14.1507 6.3264 14.2879 6.38581 14.432 6.38894ZM8.50099 4.38294C8.32616 4.49221 8.12415 4.55014 7.91799 4.55014C7.71183 4.55014 7.50981 4.49221 7.33499 4.38294L2.41699 1.32394C2.60431 1.18921 2.82925 1.11679 3.05999 1.11694H12.776C13.0067 1.11679 13.2317 1.18921 13.419 1.32394L8.50099 4.38294Z" fill="white"/>
  </svg>
}

function PhoneIcon(props) {
  return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.827 12.0699C14.8084 11.526 14.5784 11.0109 14.186 10.6339C13.627 10.026 12.9296 9.56183 12.153 9.28091C11.7407 9.1595 11.3025 9.15734 10.8891 9.27468C10.4757 9.39201 10.104 9.62404 9.81698 9.94391L9.07098 10.6849C8.20911 10.1857 7.41778 9.57363 6.71798 8.86491L6.64498 8.79191C5.93626 8.0921 5.32419 7.30077 4.82498 6.43891L5.56598 5.69291C5.88584 5.40591 6.11788 5.03418 6.23521 4.62076C6.35255 4.20734 6.35039 3.76915 6.22898 3.35691C5.94846 2.58086 5.48504 1.88385 4.87798 1.32491C4.50032 0.932889 3.98519 0.702834 3.4412 0.683246C2.89721 0.663658 2.36686 0.856067 1.96198 1.21991L1.94598 1.23391L1.92398 1.25391C1.50933 1.69022 1.18689 2.20564 0.975896 2.76937C0.764906 3.33309 0.669706 3.93356 0.695981 4.53491C0.886115 7.18993 2.07913 9.67321 4.03298 11.4809C4.44851 11.8926 4.89045 12.2767 5.35598 12.6309C5.47215 12.72 5.61895 12.7593 5.76411 12.7402C5.90926 12.7211 6.04087 12.6451 6.12998 12.5289C6.21909 12.4127 6.25841 12.2659 6.23928 12.1208C6.22015 11.9756 6.14415 11.844 6.02798 11.7549C5.60044 11.4294 5.19457 11.0763 4.81298 10.6979C3.06357 9.09736 1.98555 6.89343 1.79598 4.52991C1.77314 4.07665 1.84098 3.6234 1.99552 3.1967C2.15006 2.76999 2.3882 2.37842 2.69598 2.04491C2.8877 1.87166 3.1394 1.77997 3.39763 1.78931C3.65586 1.79864 3.90027 1.90827 4.07898 2.09491C5.50798 3.57691 5.40498 4.27691 4.77298 4.92491L3.75398 5.95191C3.67558 6.0308 3.62284 6.13155 3.60268 6.24093C3.58251 6.35032 3.59586 6.46324 3.64098 6.56491C4.20573 7.68816 4.95631 8.70786 5.86098 9.58091L5.93398 9.65391C6.80611 10.5568 7.82442 11.306 8.94598 11.8699C9.04755 11.9151 9.16042 11.9287 9.2698 11.9087C9.37918 11.8887 9.47997 11.8361 9.55898 11.7579L10.59 10.7349C11.238 10.1029 11.937 9.99991 13.42 11.4289C13.6066 11.6076 13.7162 11.852 13.7256 12.1103C13.7349 12.3685 13.6432 12.6202 13.47 12.8119C13.1399 13.117 12.7527 13.3536 12.3306 13.5081C11.9085 13.6626 11.46 13.7319 11.011 13.7119H10.986C10.0444 13.6783 9.11868 13.4591 8.26198 13.0669C8.12752 13.0083 7.97528 13.0055 7.83875 13.0591C7.70222 13.1128 7.59259 13.2184 7.53398 13.3529C7.47537 13.4874 7.47257 13.6396 7.52621 13.7761C7.57984 13.9127 7.68552 14.0223 7.81998 14.0809C8.81213 14.5348 9.88537 14.7848 10.976 14.8159H11.007C11.6033 14.8384 12.1981 14.7413 12.7563 14.5302C13.3145 14.3191 13.8248 13.9984 14.257 13.5869L14.277 13.5649L14.291 13.5489C14.6554 13.1445 14.8478 12.6139 14.827 12.0699Z" fill="white"/>
  </svg>
}

function CustomTextFieldIcon(props) {
  const iconName = props.iconName;

  switch (iconName) {
    case 'person':
    default:
      return <PersonIcon />;
    case 'email':
      return <EmailIcon />;
    case 'phone':
      return <PhoneIcon />;
  }
}

/* function handleSubmit(e) {
  e.preventDefault();
  console.log("Form Submitted");
} */

function App() {
  const [reset, setReset] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    // TODO Reset the state on all components so everything goes back to 0/Empty somehow
    setReset(true);
  };

  const handleChanged = () => {
    setReset(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book a trip</h1>
        <p>An amazing journey is waiting for you and your loved ones! You’re just one step away from a new adventure:</p>
      </header>

      <div className="AppForm">
        <form onSubmit={e => e.preventDefault()}>
          <CustomTextField labelName="Name" label="name" icon="Person" placeholder="Enter your full name" />
          <CustomTextField labelName="Email" label="email" icon="Email" placeholder="Enter your E-mail addres" />
          <CustomTextField labelName="Phone" label="phone" icon="Phone" placeholder="Enter your phone number" />

          <ul>
            <li>
              <SelectNumeric labelName="Adults" label="adults" />
            </li>
            <li>
              <SelectNumeric labelName="Kids" label="kids" />
            </li>
            <li>
              <SelectNumeric labelName="Cabin Rooms" label="cabins" />
            </li>
            <div className="formSubmit">
              <button onClick={handleSubmit}>Complete Your Booking</button>
            </div>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;
