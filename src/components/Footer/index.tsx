import './ndex.css'

export default function Footer() {
 return (
   <footer id="footer" className="h-[150px] flex flex-col justify-between py-8 px-4 mt-12 text-sm text-center">
    
     <p className='opacity-70'>
       &copy; {new Date().getFullYear()} Francisco Lombo  Diakomas. Todos os direitos reservados.
     </p>
   </footer>
 );
}