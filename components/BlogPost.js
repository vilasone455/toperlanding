import { HeadPost } from './HeadPost'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

export default function BlogPost({ children, meta}) {
  return (
    <Container>
        <Box display="flex" p={1}>
          <Box p={1}  width="60%">
            <Paper style={{padding:15}} elevation={2}>
              <HeadPost meta={meta} isBlogPost />
              <article>{children}</article>
            </Paper>
 
          </Box>
          <Box p={1} bgcolor="grey.500" width="40%">
          Item 2
        </Box>
        </Box>
     
    </Container>
  )
}
