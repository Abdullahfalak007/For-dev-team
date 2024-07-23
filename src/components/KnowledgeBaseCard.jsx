import React from "react";
import imagesPath from "../data/imagesPath.json";
import "../index.css";

const KnowledgeBaseCard = ({
  id,
  client,
  bot,
  dateCreated,
  documents,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      className="bg-lightBlue p-4 rounded-lg flex flex-col relative"
      style={{
        width: "20.875rem",
        height: "10.75rem",
        borderRadius: "0.625rem",
        background: "#E3EDFF",
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <span
          className=" text-white flex items-center justify-center ml-[-1rem]"
          style={{
            width: "4rem",
            height: "1.5rem",
            background: "#FA992A",
            fontFamily: "Poppins",
            fontSize: "0.8rem",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          ID: {id}
        </span>
        <div className="flex space-x-2 mr-36">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onEdit}
          >
            <img
              src={imagesPath.KnowledgeBase.editIcon}
              alt="Edit"
              className="w-4 h-4"
            />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onDelete}
          >
            <img
              src={imagesPath.KnowledgeBase.deleteIcon}
              alt="Delete"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
      <div className="mb-2">
        <span
          style={{
            color: "#484848",
            fontFamily: "Poppins",
            fontSize: "0.75706rem",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          Client:{" "}
        </span>
        <span
          style={{
            color: "#0771EF",
            fontFamily: "Poppins",
            fontSize: "0.75706rem",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          {client}
        </span>
      </div>
      <div className="mb-2">
        <span
          style={{
            color: "#484848",
            fontFamily: "Poppins",
            fontSize: "0.75706rem",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          Bot Name:{" "}
        </span>
        <span
          style={{
            color: "#0771EF",
            fontFamily: "Poppins",
            fontSize: "0.75706rem",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          {bot}
        </span>
      </div>
      <div className="mb-2">
        <span
          style={{
            color: "#484848",
            fontFamily: "Poppins",
            fontSize: "0.75706rem",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          Date Created:{" "}
        </span>
        <span
          style={{
            color: "#0771EF",
            fontFamily: "Poppins",
            fontSize: "0.75706rem",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          {dateCreated}
        </span>
      </div>
      <div
        className="absolute top-4 right-2 bg-white p-2 rounded-lg shadow-inner overflow-y-auto custom-scrollbar-for-pdf"
        style={{
          width: "9.0625rem",
          height: "7.25rem",
          flexShrink: 0,
          borderRadius: "0.25rem",
          background: "#FFF",
        }}
      >
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img
              src={imagesPath.KnowledgeBase.pdfIcon}
              alt="PDF"
              className="w-4 h-4"
            />
            <p
              style={{
                color: "#0771EF",
                fontFamily: "Inter",
                fontSize: "0.75rem",
                fontStyle: "normal",
                fontWeight: 400,
              }}
              className="cursor-pointer"
            >
              {doc}
            </p>
          </div>
        ))}
      </div>
      <button
        className="absolute bottom-2 left-4 text-white flex items-center justify-center"
        style={{
          width: "4.1875rem",
          height: "1.25rem",
          borderRadius: "0.625rem",
          background: "#0771EF",
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "0.5625rem",
          fontStyle: "normal",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Trained
      </button>
    </div>
  );
};

export default KnowledgeBaseCard;
