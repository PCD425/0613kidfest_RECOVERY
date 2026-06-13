# Kidova KidsFest Survey Guide

## Purpose

This survey helps the Kidova team understand:

- Whether families experience meaningful problems when a child's familiar route changes
- What families currently do when those problems happen
- Whether Kidova would be meaningfully better than current solutions
- Which product functions create the most value or concern
- What alert behavior families would trust
- Whether families would take a real next step, such as joining a pilot

The survey is intended for parents and caregivers attending NYC KidsFest. It should take about five minutes.

## Survey Structure

The activity has three parts:

1. A younger-child coloring activity and one simple safety choice
2. An anonymous caregiver validation survey
3. A separate, optional pilot-interest form

The anonymous survey and pilot-interest contact information must remain separate.

## Recommended Event Use

1. Invite the child to complete the coloring page and one simple safety choice.
2. Ask the caregiver to complete the anonymous survey.
3. Let participants complete the survey independently when possible.
4. Do not lead participants toward positive answers.
5. After submission, optionally invite the caregiver to join the pilot-interest list.
6. Export survey responses and pilot contacts into separate CSV files.

## Privacy Rules

Do not collect the following in the anonymous survey:

- Child's name
- School
- Home address
- Exact route
- Live location
- Parent or caregiver contact information

Do not commit exported survey CSV files or pilot-contact files to this repository.

The optional pilot-interest form collects an email address separately from anonymous survey responses.

## Question List

### Family Context

**1. How old is the child you are here with?**

- Under 5
- 5-8
- 9-11
- 12-14
- 15+

**2. How often does this child travel without an adult?**

- Never
- Less than monthly
- 1-3 times a month
- 1-3 times a week
- Almost every day

### Existing Problem and Behavior

**3. In the past 6 months, how many times did an unexpected route change cause a real problem?**

- None
- Once
- 2-3 times
- 4-6 times
- More than 6 times
- Not sure

**4. Think about the most recent time. What actually happened?**

- No recent incident
- Transit delay, reroute, or missed stop
- Child got lost or confused
- Child could not reach an adult
- Unsafe street, traffic, or weather condition
- Adult had to leave work or change plans
- Other

**5. What did your family use or do?**

- Called or texted the child
- Used Find My, Life360, or location sharing
- Contacted school, transit staff, or another adult
- Child solved it alone using a maps or transit app
- Adult went to pick up the child
- We did not have a good solution
- No recent incident

**6. How well did that solution work?**

- Scale from 1 to 5
- `1 = failed us`
- `5 = completely solved it`

### Kidova Concept Evaluation

Participants are shown this concept before continuing:

> Kidova detects when a familiar journey changes, gives the child one clear next step, and shows their grown-up the same situation.

**7. Compared with what you use today, is this meaningfully better?**

- Much better
- A little better
- About the same
- Worse
- I do not need this

**8. Which single part creates the most value?**

- Clear instruction for the child
- Detecting a meaningful route change
- Safe place where the child can pause
- Calm shared context for the grown-up
- Verified nearby human support
- None of these

**9. What is your biggest reason NOT to use Kidova?**

- Privacy or location-data concerns
- Wrong advice or false alerts
- Child becoming dependent on an app
- Too complicated or distracting
- Cost
- My current solution is enough
- No major concern

**10. When should Kidova alert the grown-up?**

- Every unusual change, even if low-risk
- Only when the child may need to decide or act
- Only when Kidova recommends a route change
- Only when the child asks for help
- Emergency situations only

**11. What would show that Kidova is learning and improving?**

- Fewer unnecessary alerts
- Faster, clearer instructions
- Less need for the grown-up to intervene
- Better route suggestions over time
- Child feels more confident

### Commitment and Pricing

**12. Which real next step would you take?**

- Try a free 4-week pilot through my child's school
- Try a free family pilot directly
- Join a waitlist, but not pilot yet
- Only learn more
- Probably do nothing

**13. If it worked reliably, who should pay?**

- School or school district
- City or public agency
- Family subscription
- Employer or insurance benefit
- It should always be free
- I would not use it

**14. If your family paid, what feels reasonable per month?**

- $0
- $1-5
- $6-10
- $11-20
- More than $20
- Not sure

**15. What would have to be true for you to trust it?**

- Optional open-text response
- Ask for the proof, control, partnership, or privacy protection the participant would need

## Optional Pilot-Interest Form

This form appears only after the anonymous survey is complete.

**Email**

- Required only when the participant chooses to join the pilot-interest list

**Preferred opportunity**

- Family pilot
- School-connected pilot
- Research interview only

## Data Fields

The anonymous survey exports these fields:

| Field | Description |
| --- | --- |
| `age` | Child age range |
| `independence` | Frequency of travel without an adult |
| `incident_frequency` | Route-change problem frequency |
| `last_incident` | Most recent incident type |
| `current_solution` | What the family used or did |
| `current_solution_score` | Effectiveness rating from 1 to 5 |
| `relative_value` | Kidova's value relative to current solution |
| `top_value` | Most valuable Kidova function |
| `dealbreaker` | Biggest adoption concern |
| `alert_threshold` | Preferred caregiver alert threshold |
| `learning_signal` | Evidence that Kidova is improving |
| `commitment` | Realistic next action |
| `payer` | Preferred payer |
| `price` | Reasonable monthly family price |
| `trust` | Optional trust requirement |
| `timestamp` | Submission time |

The separate pilot-interest export contains:

| Field | Description |
| --- | --- |
| `email` | Caregiver email |
| `pilot_type` | Preferred opportunity |
| `timestamp` | Submission time |

## Interpretation Notes

- Prioritize reported behavior over hypothetical enthusiasm.
- Treat `Much better` plus a pilot commitment as a stronger validation signal than general interest.
- Review alert-threshold responses for evidence of false-alert anxiety.
- Review trust responses before designing privacy, school, or verified-helper features.
- Do not interpret KidsFest attendees as a representative sample of all NYC families.
