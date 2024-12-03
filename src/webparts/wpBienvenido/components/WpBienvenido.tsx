// Acá se hacen llamado a todas las importaciones que se hacen necesiaras para implementar apartados del webpart.
import * as React from "react"; // Necesario para crear componentes.
import type { IWpBienvenidoProps } from "./IWpBienvenidoProps";  // Este también, además define los tipos de propiedades esperadas.
import { escape } from "@microsoft/sp-lodash-subset"; // Evita la inyección de código en sectores no seguros.
import { TransferCallIcon, MailIcon, RelationshipIcon } from "@fluentui/react-icons-mdl2"; // Iconos para renderizar.
import { CommandBar, ICommandBarItemProps } from "@fluentui/react/lib/CommandBar"; // Componentes de Fluent UI
import { FocusTrapZone } from "@fluentui/react/lib/FocusTrapZone"; // Componentes de Fluent UI
require("../assets/Css/style.css");

// VARIABLES LEVANTADAS (Intentaré explicar las que pueda)

const overFlowProps = { ariaLabel: "Más comandos" };

const WpBienvenido: React.FC<IWpBienvenidoProps> = ({ userDisplayName }) => {

  const [enableFocusTrap] = React.useState(false); // Administra el estado de si "FocusTrapZone" está true o false

  const ActionClick = (): void => { // Esta función devuelve una alerta
    alert("Se logró!");
  };

  return (
    <div className="header">
      <div className="contenorUsuario"> 
        <img 
         className="logo"
         src={require('../assets/Colbun_only_logo.png')}
        />
        <img
          className="iconUser"
          src="/_layouts/15/userphoto.aspx?size=S&amp;accountname=ep_ssanchez@colbun.cl"
          alt="Foto de usuario"
        />
        <div className="userInfo">
          <h5 className="textLog">Bienvenido</h5>
          <p className="userText">{escape(userDisplayName)}</p>
        </div>
        <div>
          <TransferCallIcon onClick={ActionClick} style={{ fontSize: 20, marginLeft: 20 }} />
          <RelationshipIcon style={{ fontSize: 20, marginLeft: 15 }} />
          <MailIcon style={{ fontSize: 20, marginLeft: 15 }} />
        </div>
      </div>
      <div>
        {/* Asegura que cuando esté habilitado "enableFocuTrap" el foco quede confinado en la barra de comandos.*/}
        <FocusTrapZone disabled={!enableFocusTrap}>
          <div className="commandBarContainer">
          <CommandBar
            items={_items} // Acciones principales 
            overflowButtonProps={overFlowProps}
            ariaLabel="Inbox actions"
            primaryGroupAriaLabel="Email actions"
            farItemsGroupAriaLabel="More actions"
          />
          </div>
        </FocusTrapZone>
      </div>
    </div>
  );
};

// Comandos para la CommandBar (Items Principales)
const _items: ICommandBarItemProps[] = [
  { key: "inicio", text: "Inicio"},
  {
    key: "colbun",
    text: "Colbun",
    subMenuProps: { // Permite agregar submenús a los ítems principales.
      items: [
        { key: "beneficios", text: "Beneficios" },
        { key: "convenios", text: "Convenios"},
        { key: "bienestar", text: "Bienestar"},
        { key: "plataforma", text: "Plataforma"},
      ],
    },
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.currentTarget.querySelector("button");
      if (target) target.click(); // Abre el submenú al pasar el mouse
    },
  },
  {
    key: "nosotros",
    text: "Nosotros",
    onClick: () => console.log("Nosotros"),
    subMenuProps: { // Permite agregar submenús a los ítems principales.
      items: [
        { key: "cultura_org", text: "Cultura Organizacional" },
        { key: "calidad_vida", text: "Calidad de Vida"},
        { key: "cent_proy", text: "Cetrales y Proyectos"},
        { key: "cliente_cent", text: "Cliente en el Centro"},
      ],
    },
      onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
        // Obtén el botón interno del ítem actual
      const button = e.currentTarget.querySelector("button.ms-Button") as HTMLButtonElement;
      if (button) {
        // Simula el enfoque en el botón para abrir el submenú
        button.focus();
      }
    },
  },
  {
    key: "nuestras_areas",
    text: "Nuestras Áreas",
    onClick: () => console.log("Nuestras Áreas"),
    subMenuProps: { // Permite agregar submenús a los ítems principales.
      items: [
        { key: "gen_ener", text: "Gerencai de Energía" },
        { key: "gen_com", text: "Gerencia Comercial"},
        { key: "gen_fin_adm", text: "Gerencia de Finanzas y Administración"},
        { key: "gen_medio_amb", text: "Gerencia Medio Ambiente y S&SO"},
        { key: "gen_asunt_corp", text: "Gerencia de Asuntos Coporativos"},
        { key: "gen_org_per", text: "Gerencia de Organización y Personas"},
        { key: "gen_leg", text: "Gerencia Legal"},
        { key: "gen_inno_desa", text: "Gerencia de Innovación y Desarrollo"},
        { key: "gen_aud_int", text: "Gerencia de Auditoría Interna"},
        { key: "gen_ing_proy", text: "Gerencia de Ingeniería y Proyectos"},
      ],
    },
  },
  { key: "boletines", text: "Boletines", onClick: () => console.log("Boletines")}
];

export default WpBienvenido;
