import axios from "axios";
import { DOMAIN, KEY_AUTHORIZATION_CYBERSOFT, KEY_TOKEN_CYBERSOFT, TOKEN_AUTH, TOKEN_CYBERSOFT } from "../util/settingSystem";

export class JiraCloneServices {

    signInApi = async (userLogin) => {
        return await axios({
            url: `${DOMAIN}/api/Users/signin`,
            method: 'POST',
            data: userLogin
        })
    }

    getProjectCategory = async () => {
        return await axios({
            url: `${DOMAIN}/api/ProjectCategory`,
            method: 'GET',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT
            }
        })
    }

    createProject = async (models) => {
        return await axios({
            url: `${DOMAIN}/api/Project/createProjectAuthorize`,
            method: 'POST',
            data: models,
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
                [KEY_AUTHORIZATION_CYBERSOFT]: TOKEN_AUTH
            }
        })
    }

    getAllProject = async () => {
        return await axios({
            url: `${DOMAIN}/api/Project/getAllProject`,
            method: 'GET',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
                [KEY_AUTHORIZATION_CYBERSOFT]: TOKEN_AUTH
            }
        })
    }

    deleteProject = async (id) => {
        console.log(id)
        return await axios({
            url: `${DOMAIN}/api/Project/deleteProject?projectId=${id}`,
            method: 'DELETE',
            projectId: id,
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
                [KEY_AUTHORIZATION_CYBERSOFT]: TOKEN_AUTH
            }
        })
    }

    updateProject = async (data) => {
        console.log(data)
        return await axios({
            url: `${DOMAIN}/api/Project/updateProject?projectId=${data.id}`,
            method: 'PUT',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
                [KEY_AUTHORIZATION_CYBERSOFT]: TOKEN_AUTH
            }
        })
    }
}
export const jiraCloneServices = new JiraCloneServices()