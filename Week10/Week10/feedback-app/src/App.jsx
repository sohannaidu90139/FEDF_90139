import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedback } from "./features/feedbackSlice";
import {
  Container,
  Typography,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Alert,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const feedbackEntries = useSelector((state) => state.feedback.entries);

  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      setError("Please select a rating before submitting!");
      return;
    }
    dispatch(addFeedback({ rating, comment }));
    setRating("");
    setComment("");
    setError("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Feedback Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Rating (1 to 5)
          </Typography>

          <RadioGroup
            row
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <FormControlLabel
                key={num}
                value={num.toString()}
                control={<Radio color="primary" />}
                label={num}
              />
            ))}
          </RadioGroup>

          <TextField
            label="Comments (optional)"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{ mt: 2 }}
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1 }}
          >
            Submit Feedback
          </Button>
        </form>
      </Paper>

      {/* Display feedback entries */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Submitted Feedback
        </Typography>

        {feedbackEntries.length === 0 ? (
          <Typography color="text.secondary">
            No feedback submitted yet.
          </Typography>
        ) : (
          <List>
            {feedbackEntries.map((entry, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <>
                        <StarIcon color="warning" /> Rating: {entry.rating}
                      </>
                    }
                    secondary={
                      entry.comment ? entry.comment : "No comment provided."
                    }
                  />
                </ListItem>
                {index < feedbackEntries.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
}

export default App;
