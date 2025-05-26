import Job from "./Job";

const Jobs = () => {
  return (
    <main>
      <div className="container job-bloc ">
        <Job
          className="color-red job-box"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="color-green job-box"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Job
          className="color-yellow job-box"
          title="Responsable d'Atelier"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="color-blue job-box"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="color-pink job-box"
          title="Développeur Réact.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="color-red job-box"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Job
          className="color-green job-box"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Job
          className="color-yellow job-box"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
        <Job
          className="color-blue job-box"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
    </main>
  );
};

export default Jobs;
