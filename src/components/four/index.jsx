import icon from '../../images/iconwwp.png'
import celular from '../../images/celularicon.png'
import email from '../../images/emailicon.png'
import linkedin from '../../images/linkedinicon.png'
import facebook from '../../images/facebookicon.png'
import github from '../../images/githubicon.png'
import instagram from '../../images/instagramicon.png'


import './styles.css'
export const GridFour = () => {
    return (
        <div id='GridFour'  >
            <h2>Contatos</h2>
            <p className='content'><img src={icon}t alt='icone whatsapp' className='icon'/> Whatsapp: (17) 99726-2808 </p>
            
            <p className='content'><img src={celular} alt="celular" className='icon'/> Celular: (17) 99726-2808 </p>
            <p className='content'><img src={email} alt='email'  className='icon'/> Email: leonardohenri2012@gmail.com </p>
            <a href="https://www.linkedin.com/in/leonardo-henrique-da-silva-32110815a/" rel="noopener noreferrer" className="link" target="_blank"><img src={linkedin} alt="linkedin" className='icon'/>Linkedin</a>
            <a href="https://www.facebook.com/leonardo.henriquedasilva.92/" rel="noopener noreferrer" className="link" target="_blank"><img src={facebook} alt="facebook" className='icon'/>Facebook</a>
            <a href="https://www.instagram.com/leonardohenri15/" rel="noopener noreferrer" className="link" target="_blank"><img src={instagram} alt="instagram" className='icon'/>Instagram</a>
            <a href="https://github.com/leonardohenri" rel="noopener noreferrer" className="link" target="_blank"><img src={github} alt="github" className='icon'/>github</a>
        </div>
    ); 
}
