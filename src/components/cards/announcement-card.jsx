import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const AnnoncementCard = ({ announcement }) => {
  return (
    <Card
      key={announcement.id}
      className="rounded-xl shadow-md hover:shadow-lg transition flex flex-col py-4"
    >
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary">{announcement.type}</Badge>
          <span className="text-xs text-muted-foreground">
            📅 {announcement.date}
          </span>
        </div>
        <CardTitle className="text-lg font-semibold text-primary">
          {announcement.subject}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 leading-relaxed">
          {announcement.message}
        </p>
      </CardContent>
    </Card>
  );
};

export default AnnoncementCard;
