import AnchorLink from "react-anchor-link-smooth-scroll"
import styles from "@/components/Navbar/Link.module.css"
import type { SelectedPage } from "@/shared/types";
type Props = {
    page: String;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}

const Link = ({
    page, 
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    
    return (
    <AnchorLink
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    className={selectedPage === lowerCasePage ? styles.Selected_page : styles.Anchor_link}>
        {page}
    </AnchorLink>
  )
}

export default Link