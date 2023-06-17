import React, { useState } from "react";

function FAQ() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Comment puis-je m'inscrire pour étudier en France en tant qu'étudiant étranger?",
      answer: "Pour vous inscrire dans une université française, vous devez effectuer une demande d'admission sur le portail 'Parcoursup' ou directement auprès de l'université de votre choix.",
      isOpen: false,
    },
    {
      id: 2,
      title: "De quels documents ai-je besoin pour étudier en France?",
      answer: "Description de la réponse",
      isOpen: false,
    },
    {
      id: 3,
      title: "Comment obtenir un visa étudiant pour la France?",
      answer: "Description de la réponse",
      isOpen: false,
    },
    {
      id: 4,
      title: "Comment trouver un logement étudiant en France en tant qu'étudiant étranger?",
      answer: "Description de la réponse",
      isOpen: false,
    },
    {
      id: 5,
      title: "Puis-je travailler en France en tant qu'étudiant étranger ?",
      answer: "Description de la réponse",
      isOpen: false,
    },
    {
      id: 6,
      title: "Comment puis-je apprendre le français avant de venir étudier en France?",
      answer: "Description de la réponse",
      isOpen: false,
    },
    {
      id: 7,
      title: "Y a-t-il des bourses d'études disponibles pour les étudiants étrangers en France?",
      answer: "Description de la réponse",
      isOpen: false,
    },
    {
      id: 8,
      title: "Quelle est la durée de validité d'un visa étudiant pour la France?",
      answer: "Description de la réponse",
      isOpen: false,
    },
    {
      id: 9,
      title: "Comment puis-je trouver des informations sur les programmes d'échange en France?",
      answer: "Description de la réponse",
      isOpen: false,
    },
  ]);

  const handleToggle = (id) => {
    const updatedQuestions = questions.map((q) => {
      if (q.id === id) {
        return { ...q, isOpen: !q.isOpen };
      } else {
        return q;
      }
    });
    setQuestions(updatedQuestions);
  };

  return (
    <div className="faq">
      <div className="title-container">
        <h1>FAQ</h1>
      </div>
      <div className="question-container">
        {questions.map((q) => (
          <div className="question" key={q.id}>
            <div className="question-header" onClick={() => handleToggle(q.id)}>
              <h2>{q.title}</h2>
              <span>{q.isOpen ? "▲" : "▼"}</span>
            </div>
            {q.isOpen && <div className="answer">{q.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
