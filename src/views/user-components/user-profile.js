import { Thumbnail } from "../../components"
import { Icons } from "../../components";

const UserProfile = ({
    profileImage,
    name,
    login,
    bio,
    location,
    email,
    blog,
    followers,
    following,
    repos,
    gists,
    url
}) => {
    return (
        <div className="user-profile">
            <div className="row">
                {
                    profileImage &&
                    <div className="col-auto">
                        <Thumbnail
                            larger
                            src={profileImage}
                        />
                    </div>
                }
                <div className="col">
                    {
                        name &&
                        <h2 className="name"><a href={url}>{name}</a></h2>
                    }
                    {
                        login &&
                        <div className="login-name mb-3">{login}</div>
                    }
                    {
                        bio &&
                        <p className="bio mb-3">{bio}</p>
                    }
                    {
                        location &&
                        <div className="user-info">
                            <Icons.MapPin />
                            {
                                location
                            }
                        </div>
                    }
                    {
                        email &&
                        <div className="user-info">
                            <Icons.Mail />
                            <a href={`mailto:${email}`}>
                                {
                                    email
                                }
                            </a>
                        </div>
                    }
                    {
                        blog &&
                        <div className="user-info">
                            <Icons.Link />
                            <a href={blog}>{blog}</a>
                        </div>
                    }
                    {
                        (followers >= 0 || following >= 0 || repos >= 0 || gists >= 0) &&
                        <div className="user-data mt-4">
                            {
                                followers >= 0 &&
                                <div className="data">
                                    <strong>{followers}</strong>
                                    Followers
                                </div>
                            }
                            {
                                following >= 0 &&
                                <div className="data">
                                    <strong>{following}</strong>
                                    Following
                                </div>
                            }
                            {
                                repos >= 0 &&
                                <div className="data">
                                    <strong>{repos}</strong>
                                    Repos
                                </div>
                            }
                            {
                                gists >= 0 &&
                                <div className="data">
                                    <strong>{gists}</strong>
                                    Gists
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfile;