import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faEdit} from "@fortawesome/free-solid-svg-icons";
export function EditIcon({id}) {
    return (
        <Link to={`/owner/addlocation/${id}`} data-toggle="tooltip" data-placement="top" title="Edit Location"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
    )
}