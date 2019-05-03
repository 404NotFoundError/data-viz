<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190503074011 extends AbstractMigration
{
    public function getDescription() : string
    {
        return 'Add lgt and lat on productors tables';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE productor ADD longitude VARCHAR(20) DEFAULT NULL, ADD latitude VARCHAR(20) DEFAULT NULL, CHANGE name name VARCHAR(75) NOT NULL');
        $this->addSql('ALTER TABLE country CHANGE name name VARCHAR(50) NOT NULL, CHANGE first_region first_region VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE wine CHANGE name name VARCHAR(200) NOT NULL, CHANGE variety variety VARCHAR(50) NOT NULL, CHANGE color color VARCHAR(45) NOT NULL');
        $this->addSql('ALTER TABLE food CHANGE name name VARCHAR(250) NOT NULL');
        $this->addSql('ALTER TABLE tester CHANGE name name VARCHAR(70) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE country CHANGE name name VARCHAR(50) DEFAULT \'\' NOT NULL COLLATE utf8_general_ci, CHANGE first_region first_region VARCHAR(50) DEFAULT \'\' NOT NULL COLLATE utf8_general_ci');
        $this->addSql('ALTER TABLE food CHANGE name name VARCHAR(250) DEFAULT \'\' NOT NULL COLLATE utf8_general_ci');
        $this->addSql('ALTER TABLE productor DROP longitude, DROP latitude, CHANGE name name VARCHAR(75) DEFAULT \'\' NOT NULL COLLATE utf8_general_ci');
        $this->addSql('ALTER TABLE tester CHANGE name name VARCHAR(70) DEFAULT \'\' NOT NULL COLLATE utf8_general_ci');
        $this->addSql('ALTER TABLE wine CHANGE name name VARCHAR(200) DEFAULT \'\' NOT NULL COLLATE utf8_general_ci, CHANGE variety variety VARCHAR(50) DEFAULT \'\' NOT NULL COLLATE utf8_general_ci, CHANGE color color VARCHAR(45) DEFAULT \'\' NOT NULL COLLATE utf8_general_ci');
    }
}
