import { AppBar, Toolbar, makeStyles, Link } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";

const navigationLinks = [
  { name: "Produtos", href: "/" },
  { name: "Adicionar", href: "/add" },
];

const useStyles = makeStyles(() => ({
  link: {
    color: "#ffffff",
    "&:hover": {
      color: "#001149",
      textDecoration: "underline #001149",
    },
  },
  avatar: {
    marginRight: "auto",
    color: "white",
    backgroundColor: "#0e2957",
    borderRadius: 10,
    height: 30,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
  },
}));

export default function Header() {
  const styles = useStyles();
  return (
    <AppBar
      position="sticky"
      color="default"
      style={{ background: "linear-gradient(180deg,#396fad, #1f468f)" }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Avatar className={styles.avatar}>NEXUS</Avatar>
          {navigationLinks.map((item) => (
            <Link
              className={styles.link}
              style={{ padding: 20 }}
              variant="button"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
