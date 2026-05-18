## API Integration Notes

The notification API was integrated using token-based authentication obtained from the provided auth endpoint.

Environment variables were used to securely manage tokens.

Custom logging middleware was used for:
- API request tracking
- error handling
- execution tracing

The implementation includes proper handling for authorization failures and API inconsistencies.