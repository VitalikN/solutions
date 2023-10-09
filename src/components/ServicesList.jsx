import Link from "next/link";
import services from "../../services.json";

const ServicesList = ({ onServiceSelect }) => {
  return (
    <ul>
      {services.map(({ id, title }) => (
        <li key={id} onClick={() => onServiceSelect(id)}>
          <h3>
            <Link href={`#service-${id}`}>{title}</Link>
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
