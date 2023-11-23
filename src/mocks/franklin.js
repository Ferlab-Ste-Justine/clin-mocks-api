import express from 'express';

/**
 * https://api-docs.genoox.com/#2a24bb66-846d-4a97-8b53-6f283f8b51e1
 */

const franklin = express.Router();
const token_expiration = 3600;

franklin.get('/v1/auth/login', (req, res, next) => {
    if (!req.query.email || !req.query.password) {
        res.status(403).send('missing auth params')
    }else {
        res.json(
            {
                "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1ETTBSVGhDTnpORVJEVTBRVFpEUVRNNE4wSkdSRGszUWpZMU1EYzVSVGswTURVek56VkdSZyJ9.eyJpc3MiOiJodHRwczovL2dlbm9veC5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWViZDEwMmIzMTJkMzIwYzI2YWIzNDk4IiwiYXVkIjpbImh0dHBzOi8vZ2Vub294LmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaHR0cHM6Ly9nZW5vb3guZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYwODE0OTM3MywiZXhwIjoxNjA4MjM1NzczLCJhenAiOiIxVkdOdjhBUmYwUnRRSk03RDRLM0VwRTJtSWxud2hVYyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgcmVhZDpjdXJyZW50X3VzZXIgdXBkYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBkZWxldGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGNyZWF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgY3JlYXRlOmN1cnJlbnRfdXNlcl9kZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmN1cnJlbnRfdXNlcl9kZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmN1cnJlbnRfdXNlcl9pZGVudGl0aWVzIiwiZ3R5IjoicGFzc3dvcmQifQ.zhjjsg0mXIy0OdBepDu_66JhKX-yLiLsLWTEKd4dCE2WyE6hc9g42W8RsmqcZ6ww29vNjGKwdaluYqKfbiKDSWE_rf00jBlq18xAkzy55QcfvUlOGZADwA6nx3VbTVskq47CUD9WyT7AXnJrC6PPxL233mbyUuDGN1CGdqlRR1NLU-mvpb9E8aqP7kQbcsWLWG3dI4d_d3ZAZrGsvKmoBgjq45c1FPrnMF20WHi-PUQSeTKx8Slo9tZ8ug6YozCI15nJoEMteUxbizx_MJT9jsdP9o_GSqof93VYevmXKsPQD0SiW_jVkZYYh8YFjkZixb_mvMdVEI4GtsTmiANyhw",
                "duration": token_expiration,
                "expires_at": Date.now() + token_expiration
            }
        );
    }
    next();
});

export default franklin;
