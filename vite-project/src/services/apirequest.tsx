import axios from 'axios'

interface GitHubUser {
    login: string
    name: string
    avatar_url: string
    public_repos: number
    followers: number
  }
  
  export async function GetDados(name: string): Promise<GitHubUser> {
    const response = await axios.get<GitHubUser>(`https://api.github.com/users/${name}`)
    return response.data
  }
  