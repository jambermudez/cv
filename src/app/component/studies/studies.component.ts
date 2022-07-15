import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/mode/Skill.model';


@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {


  listSkillsDev:Skill[] = [
    {
      skill: 'J2EE',
      image: '../../../assets/images/dev/java.svg',
      numberSkill: 4,
    },
    {
      skill: 'PL/SQL',
      image: '../../../assets/images/dev/pl-sql.ico',
      numberSkill: 4,
    },
    {
      skill: 'C/C++',
      image: '../../../assets/images/dev/c.svg',
      numberSkill: 2,
    },
    {
      skill: 'Android',
      image: '../../../assets/images/dev/android.svg',
      numberSkill: 1,
    }];

    listSkillsWeb:Skill[] = [
    {
      skill: 'Angular',
      image: '../../../assets/images/web/angular.svg',
      numberSkill: 4
    },
    {
      skill: 'HTML 5',
      image: '../../../assets/images/web/html.svg',
      numberSkill: 4
    },
    {
      skill: 'CSS3',
      image: '../../../assets/images/web/css.svg',
      numberSkill: 3
    },
    {
      skill: 'Bootstrap',
      image: '../../../assets/images/web/bootstrap.svg',
      numberSkill: 3
    }];

    listSkillsFr:Skill[] = [
    {
      skill: 'Spring MVC/Spring Boot',
      image: '../../../assets/images/fr/spring.svg',
      numberSkill: 4
    },
    {
      skill: 'Hibernate',
      image: '../../../assets/images/fr/hibernate.svg',
      numberSkill: 2
    },
    {
      skill: 'JPA',
      image: '../../../assets/images/fr/jpa.svg',
      numberSkill: 2
    },
    {
      skill: 'MyBatis',
      image: '',
      numberSkill: 3
    }];

    listSkillsBD:Skill[] = [
    {
      skill: 'Oracle',
      image: '../../../assets/images/bd/oracle.svg',
      numberSkill: 4
    },
    {
      skill: 'PostgreSQL',
      image: '../../../assets/images/bd/postgresql.svg',
      numberSkill: 4
    },
    {
      skill: 'MySQL',
      image: '../../../assets/images/bd/mysql.svg',
      numberSkill: 4
    },
    {
      skill: 'MongoDB',
      image: '../../../assets/images/bd/mongodb.svg',
      numberSkill: 1
    }]

    listSkillsIC:Skill[] = [
    {
      skill: 'Scrum',
      image: '../../../assets/images/ic/scrum.svg',
      numberSkill: 3
    },
    {
      skill: 'Jira',
      image: '../../../assets/images/ic/jira.svg',
      numberSkill: 3
    },
    {
      skill: 'Maven',
      image: '../../../assets/images/ic/maven.svg',
      numberSkill: 4
    },
    {
      skill: 'Jenkins',
      image: '../../../assets/images/ic/jenkins.svg',
      numberSkill: 4
    },
    {
      skill: 'SonarQube',
      image: '../../../assets/images/ic/sonarqube.svg',
      numberSkill: 4
    },
    {
      skill: 'Git',
      image: '../../../assets/images/ic/git.svg',
      numberSkill: 4
    },
    {
      skill: 'SVN',
      image: '../../../assets/images/ic/svn.ico',
      numberSkill: 2
    },
    {
      skill: 'Openshift',
      image: '../../../assets/images/ic/openshift.svg',
      numberSkill: 2
    },
    {
      skill: 'Docker',
      image: '../../../assets/images/ic/docker.svg',
      numberSkill: 3
    },
    {
      skill: 'Kubernetes',
      image: '../../../assets/images/ic/kubernetes.svg',
      numberSkill: 1,
    }
  ];

  listSkillsLx:Skill[] = [
    {
      skill: 'Ubuntu',
      image: '../../../assets/images/lx/debian.svg',
      numberSkill: 3
    },
    {
      skill: 'Debian',
      image: '../../../assets/images/lx/ubuntu.svg',
      numberSkill: 3
    }]

  listStudies:any[] = [
    {
      skill: 'Master en Ingenieria Informatica',
      image: 'https://www.upo.es/cms1/export/sites/upo/comunicacion/imagenes/mic-upo-descargas/Marca-UPO-Horizontal.png',
      numberSkill: 0
    },
    {
      skill: 'Ingenieria Tec. en Informatica de Gestion',
      image: 'https://www.upo.es/cms1/export/sites/upo/comunicacion/imagenes/mic-upo-descargas/Marca-UPO-Horizontal.png',
      numberSkill: 0
    }
  ];

  listExperience:any[] = [
    {
      company: 'Minsait Payments',
      date: 'Octubre 2021 - Actualmente',
      puesto: 'Desarrollador J2EE. Integración continua.',
      desc: 'Parte del equipo de arquitectura para la creación de nuevos aplicativos. Desarrollos en Spring MVC con BBDD MySql. Conexión en local con BBDD en un contenedor(Docker). Marco de trabajo con Scrum y JIRA'
    },
    {
      company: 'ViewNext S.A',
      date: 'Agosto 2019 - Octubre 2021',
      puesto: 'Desarrollador Full Stack. Integración continua.',
      desc: 'Colaboración en la creación de la nueva arquitectura para el cliente usando J2EE y Spring Boot como framework. Colaboración en la creación de la aplicación del voto electrónico para la Junta de Accionista del cliente. Nuevos desarrollos usando integración continua con Jenkins y aportando calidad de código con Sonar. Todo el código desarrollado se sube a un repositorio GitHub. Scrum es el marco de trabajo seguido en esos proyectos. Los desarrollos del back-end son Java 7/8 con los framework Spring MVC y Spring Boot. Y servidores Jboss y Openshift. Los desarrollos del frontend Angular 7 y 10 y bases de datos Oracle y PostgreSql'
    },
    {
      company: 'Indra Sistemas S.A',
      date: 'Noviembre. 2018 - Agosto. 2019',
      puesto: 'Desarrollador Back-End.',
      desc: 'Implementación de micro servicios. Uso de Open-Shift y GitLab para el despliegue de dichos servicios. Para el back-end usamos java 1.7 y Spring MVC, para el front-end Vue.js, y base de datos mongoDB.'
    }
  ];

  panelOpenState = true;

  constructor() { }

  ngOnInit(): void {
  }

}
