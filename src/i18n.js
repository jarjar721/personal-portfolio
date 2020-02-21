import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .init({
    resources: {
        en: {
            translations: {
                //NavigationBar
                Home: "Home",
                About: "About",
                Tools: "Tools",
                Projects: "Projects",
                Resume: "Resume",
                Contact: "Contact",

                //Home
                homeTitle: "Hello! I'm ",
                homeSubtitle: "Software Engineer in Caracas, Venezuela",

                //AboutMe
                about: "About",
                me: "Me",
                aboutMeIntro: "Computer Engineering student at Universidad Católica Andrés Bello in Caracas, Venezuela.",
                aboutMeDescription: "I'm a dual Venezuelan-Spanish citizen with experience in web development, database modeling and data warehousing who seeks an entry-level job position in business intelligence.",
                DownloadCV: "Download CV",
                aboutMeEmail: "Email",
                aboutMePhone: "Phone",

                //MyTools
                my: "My",
                tools: "Tools",
                myToolsIntro: "More than 2 years wielding their power crafting web applications",

                //MyProjects
                projects: "Projects",
                SISI: "Sistema Administrativo de Investigaciones (SIS-I)",
                SISIDescription: "An administrative tool to draft theses, research papers and investigations following the research methodology proposed by Jaqueline Hurtado Barrera.",
                bullet1: "Built using Laravel Framework with PostgreSQL",
                bullet2: "Integrated Access Control and Priviledge Management",
                bullet3: "Scalable ER Diagram for larger investigations",
                demo: "Live Demo",
                repo: "GitHub Repository",

                //Resume
                resumeMy: "My",
                resumeTitle: "Resume",
                education: "Education",
                experience: "Experience",

                //UCAB
                dateUCAB: "September 2015 - Present",
                titleUCAB: "Bachelor's in Informatics Engineering",
                descriptionUCAB: "Currently in my last year of college and I'm anxiously waiting to be the Class of 2020.",
                UCAB: "Universidad Católica Andrés Bello",

                //Telefonica
                dateTelefonica: "September 2019 - Today",
                titleTelefonica: "BI Engineer",
                descriptionTelefonica: "Built databases, data warehouses, data marts and dashboards using PowerBI for the HR department. Working at Telefónica's Headquarters in Caracas, Venezuela",
                Telefonica: "Telefónica",

                //CrewNew
                dateCrewNew: "October 2019 - January 2020",
                titleCrewNew: "Back-end Developer",
                descriptionCrewNew: "Developed a CRM for a London-based client using Laravel, MySQL and third party APIs. Worked remotely from Caracas, Venezuela",
                CrewNew: "CrewNew - Agency of Freelancers",

                //CAF
                dateCAF: "July 2018 - October 2018",
                titleCAF: "Information Security Intern",
                descriptionCAF: "Granted accesses to CAF's systems through TPAM and monitored information flow using Symantec's DLP for Endpoint.",
                CAF: "CAF - Development Bank of Latin America",
            
                //Footer
                findMe: "Find me",
                on: " on",
            }
        },
        es: {
            translations: {
                //NavigationBar
                Home: "Inicio",
                About: "Sobre mí",
                Tools: "Herramientas",
                Projects: "Proyectos",
                Resume: "Currículum",
                Contact: "Contacto",

                //Home
                homeTitle: "¡Hola! Soy ",
                homeSubtitle: "Ingeniero de Software en Caracas, Venezuela",

                //AboutMe
                about: "Sobre",
                me: "mí",
                aboutMeIntro: "Estudiante de Ingeniería Informática en la Universidad Católica Andrés Bello en Caracas, Venezuela.",
                aboutMeDescription: "Ciudadano español-venezolano con experiencia en desarrollo web, diseño de bases de datos y data warehousing en búsqueda de un empleo remoto en inteligencia de negocios. ",
                DownloadCV: "Descargar CV",
                aboutMeEmail: "Correo Electrónico",
                aboutMePhone: "Teléfono",

                //MyTools
                my: "Mis",
                tools: "herramientas",
                myToolsIntro: "Usando su poder por más de 2 años para crear aplicaciones web",

                //MyProjects
                projects: "proyectos",
                SISI: "Sistema Administrativo de Investigaciones (SIS-I)",
                SISIDescription: "Aplicación administrativa para desarrollar investigaciones siguiendo la metodología propuesta por Jaqueline Hurtado Barrera",
                bullet1: "Construido usando Laravel Framework y PostgreSQL",
                bullet2: "Control de acceso y gestión de privilegios",
                bullet3: "MER escalable para investigaciones más complejas",
                demo: "Demo",
                repo: "Repositorio",

                //Resume
                resumeMy: "Mi",
                resumeTitle: "currículum",
                education: "Educación",
                experience: "Experiencia",

                //UCAB
                dateUCAB: "Septiembre 2015 - Presente",
                titleUCAB: "Ingeniero en Informática",
                descriptionUCAB: "Cursando el último año de la carrera y esperando el acto de grado en 2020.",
                UCAB: "Universidad Católica Andrés Bello",

                //Telefonica
                dateTelefonica: "Septiembre 2019 - Presente",
                titleTelefonica: "Ingeniero BI",
                descriptionTelefonica: "Diseño de bases de datos, data warehouses, data marts y dashboards usando PowerBI para la Vicepresidencia de RR.HH.. Localizado en Caracas, Venezuela",
                Telefonica: "Telefónica",

                //CrewNew
                dateCrewNew: "Octubre 2019 - Enero 2020",
                titleCrewNew: "Desarrollador de Back-end",
                descriptionCrewNew: "Desarrollador de back-end usando Laravel, MySQL y distintas APIs. Empleo remoto desde Caracas, Venezuela",
                CrewNew: "CrewNew - Agency of Freelancers",

                //CAF
                dateCAF: "Julio 2018 - Octubre 2018",
                titleCAF: "Pasante de Seguridad de Información",
                descriptionCAF: "Gestión de accesos a los sistemas de CAF y monitoreo del flujo de información usando DLP for Endpoint de Symantec.",
                CAF: "CAF - Banco de desarrollo de América Latina",

                //Footer
                findMe: "Encuéntrame",
                on: " en",
            }
        }
    },

    fallbackLng: "en",
    debug: true,

    ns:["translations"],
    defaultNS: "translations",

    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;