import '../styles/imports/sign-in-btn.scss'

function SignInBtn(props) {
    return (
        <div className='btn-wrapper'>
            <a href = {props.URL} className='sign-in-btn'>Sign in</a>
        </div>
    )
}

export default SignInBtn