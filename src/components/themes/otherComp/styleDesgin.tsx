import Fire from '../../../assets/—Pngtree—ying yang_12158275.png'
interface YinYangProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    // Add any additional props specific to your component
  }
export const YinYang : React.FC<YinYangProps> = (props) => {
    
    return (
        <img  src={Fire} alt="spaceman"
        {...props}
        />
      )
}