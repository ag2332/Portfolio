const Buttons = ({ href = '', text = '' }) => {

  const buttons = [
    {
        id: 1,
        href: "mailto:archiegeorge23@gmail.com?subject=Portfolio%20Inquiry",
        text: "Contact Me"
    },{
        id: 2,
        href: "https://www.linkedin.com/in/archie-george-41a116356",
        text: "LinkedIn"
    },{
        id: 3,
        href: "https://github.com/ag2332/",
        text: "GitHub"
    }
  ];

  return (
    <div>
      {buttons.map((item, key) => {
        console.log(item)
        const {
          id,
          href,
          text,
        } = item
        return (
          <Button
          key={key}
          id={id}
          href={href}
          text={text}
          />
        )
      })}
    </div>
  )
}

export default Buttons

function Button({
  id,
  href,
  text,
}) {
  return (
    <a href={href} className="flat-button" target="_blank" rel="noopener noreferrer">{text}</a>
  )
}