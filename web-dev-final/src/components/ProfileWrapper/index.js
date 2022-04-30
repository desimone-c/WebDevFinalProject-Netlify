import {useProfile} from "../../contexts/profile-context";
import {useNavigate, useParams} from "react-router-dom";
import * as service from "../../services/auth-service";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllPosts, findUserPosts} from "../../actions/posts-actions";
import * as userActions from "../../actions/users-actions";
import Profile from "../Profile";

const ProfileWrapper = () => {
    console.log("in profile wrapper")


    const {userId} = useParams();
    console.log("user id")
    console.log(userId);

    const {profile} = useProfile()
    console.log(profile);

    const navigate = useNavigate()
    console.log("in profile");
    //
    const logout = async () => {
        await service.logout()
        navigate('/signin')
    }

    let this_user = useSelector(state => state.user);
    let uid = userId;

    if (!userId) {
        this_user = profile;
        uid = profile._id;
    }
    const dispatch = useDispatch();
    const updateNav = () => {
        dispatch({type: 'nav-change', value: 'profile'});
    };
    useEffect(updateNav);





    useEffect(() => {
        userActions.findUser(dispatch, uid);
    }, [dispatch, uid])

    console.log("this user")
    console.log(this_user);

    return (this_user ? <Profile profile={profile}/> : <div></div>);

}

export default ProfileWrapper;