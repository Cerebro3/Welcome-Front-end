import React from "react";

function InfoUtiles() {
return (
<div className="info-container">
<div className="image-container">

</div>
<div className="title-description-container">
<div className="title-container">

<h1>Les Informations Utiles</h1>
</div>
<div className="info-content">
<div className="info-section">
<div className="info-text">
<h2>Comment trouver un emploi étudiant en France?</h2>
<p>Description de la réponse</p>
</div>
<div className="image-section">
<img src={require("../welcome2.png")} alt="emploi étudiant"  />

</div>
</div>
<div className="info-section">
<div className="info-text">
<h2>Les documents nécessaires pour étudier en France : Liste complète</h2>
<p>Description de la réponse</p>
</div>
<div className="image-section">
<img src={require("../welcome2.png")} alt="documents pour études" />
</div>
</div>
<div className="info-section">
<div className="info-text">
<h2>Comment obtenir un visa étudiant pour la France</h2>
<p>Description de la réponse</p>
</div>
<div className="image-section">
<img src={require("../welcome2.png")} alt="visa étudiant" />
</div>
</div>
<div className="info-section">
<div className="info-text">
<h2>Comment trouver un logement étudiant en France</h2>
<p>Description de la réponse</p>
</div>
<div className="image-section">
<img src={require("../welcome2.png")}alt="logement étudiant" />
</div>
</div>
<div className="info-section">
<div className="info-text">
<h2>Le système universitaire français : Comment ça fonctionne?</h2>
<p>Description de la réponse</p>
</div>
<div className="image-section">
<img src={require("../welcome2.png")} alt="système universitaire" />
</div>
</div>
<div className="info-section">
<div className="info-text">
<h2>Les bourses et aides financières pour les étudiants étrangers en France</h2>
<p>Description de la réponse</p>
</div>
<div className="image-section">
<img src={require("../welcome2.png")}  alt="bourses et aides financières" />
</div>
</div>
</div>
</div>
</div>
);
}

export default InfoUtiles;