import React from 'react';
import { Link } from "react-router-dom";
import { FiEdit2, FiTrash, FiX } from "react-icons/fi";
import { FaInfo } from "react-icons/fa";
import './buttons.scss';
const SuccessButton = ({buttonTitle, handleButtonClick, }) => (
    <button className={"success-btn "} onClick={  handleButtonClick}>{buttonTitle}</button>
);
const BackButton = ({to, title }) => (
    <Link className="back-btn " to={to}>{title}</Link>
);
const CloseButton = ({ handleButtonClick }) => (
     <FiX size={25} color={"#6c757d"} onClick={handleButtonClick}/>
);
const DefaultButton = ({to, title})=> (
    <Link className="btn-default" to={to}>{title}</Link>
);
const EditButton = ({handleButtonClick})=>(
    <section className="btn-link">
        <span className="btn-link__edit" onClick={handleButtonClick} ><FiEdit2 color={"#fff"} /></span>
    </section>
);
const EditLink = ({to})=>(
    <section className="btn-link">
        <Link to={to} className="btn-link__edit"><FiEdit2 color={"#fff"} /></Link>
    </section>
);
const InfoCircleButton = ({to}) => (
    <Link className="btn-circle btn-details" to={to}>
        <FaInfo size={18} color={"#17a2b8"} />
    </Link>
);
const EditCircleButton = ({to}) => (
    <Link className="btn-circle btn-edit" to={to}>
        <FiEdit2 size={18} color={"#57bea5"} />
    </Link>
);
const DeleteCircleButton = ({to}) => (
    <Link className="btn-circle btn-delete" to={to}>
    <FiTrash size={18} color={"#dc3545"} />
</Link>
);

export {
    SuccessButton,
    BackButton,
    CloseButton,
    DefaultButton,
    EditButton,
    EditLink,
    InfoCircleButton,
    EditCircleButton,
    DeleteCircleButton
};
